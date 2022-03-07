import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOneUsersUseCase } from './ListOneUsersUseCase';

class ListOneUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listOneUsersUseCase = container.resolve(ListOneUsersUseCase);

    const user = await listOneUsersUseCase.execute(id);

    return response.json(user);
  }
}

export { ListOneUsersController };
