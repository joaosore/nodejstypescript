import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ActiveUserUseCase } from './ActiveUserUseCase';

class ActiveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { is_active } = request.body;
    const { id } = request.params;

    const activeUserUseCase = container.resolve(ActiveUserUseCase);

    await activeUserUseCase.execute({ id, is_active });

    return response.status(201).send();
  }
}

export { ActiveUserController };
