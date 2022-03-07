import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async isActive({
    id,
    is_active,
  }: {
    id: any;
    is_active: any;
  }): Promise<void> {
    await this.repository.update({ id }, { is_active });
  }

  async update({
    id,
    name,
    password,
  }: {
    id: any;
    name: any;
    password: any;
  }): Promise<void> {
    const obj = {};

    if (name) {
      obj.name = name;
    }

    if (password) {
      obj.password = password;
    }

    await this.repository.update({ id }, obj);
  }

  async listOne(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
