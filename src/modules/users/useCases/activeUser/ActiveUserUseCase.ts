import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/erros/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ActiveUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, is_active }): Promise<void> {
    const userAlreadyexists = await this.usersRepository.findById(id);

    if (!userAlreadyexists) {
      throw new AppError('User not exists', 401);
    }

    await this.usersRepository.isActive({ id, is_active });
  }
}

export { ActiveUserUseCase };
