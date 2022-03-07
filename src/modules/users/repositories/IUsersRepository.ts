import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
  update({ id, name, password }): Promise<void>;
  isActive({ id, is_active }): Promise<void>;
  listOne(id: string): Promise<User>;
}

export { IUsersRepository };
