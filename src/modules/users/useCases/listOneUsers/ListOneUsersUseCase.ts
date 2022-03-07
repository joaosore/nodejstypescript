import { inject, injectable } from 'tsyringe';

import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListOneUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.listOne(id);
    return user;
  }
}

export { ListOneUsersUseCase };
