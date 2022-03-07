import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/erros/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    const userAlreadyexists = await this.usersRepository.findByEmail(email);

    if (userAlreadyexists) {
      throw new AppError('User already exists', 401);
    }

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
