import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/erros/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, id, password }): Promise<void> {
    const userAlreadyexists = await this.usersRepository.findById(id);

    if (!userAlreadyexists) {
      throw new AppError('User not exists', 401);
    }

    let passwordHash = '';

    if (password) {
      passwordHash = await hash(password, 8);
    } else {
      passwordHash = userAlreadyexists.password;
    }

    await this.usersRepository.update({ name, id, password: passwordHash });
  }
}

export { UpdateUserUseCase };
