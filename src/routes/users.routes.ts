import { ActiveUserController } from '@modules/users/useCases/activeUser/ActiveUserController';
import { ListOneUsersController } from '@modules/users/useCases/listOneUsers/ListOneUsersController';
import { ListOneUsersUseCase } from '@modules/users/useCases/listOneUsers/ListOneUsersUseCase';
import { UpdateUserController } from '@modules/users/useCases/updateUser/UpdateUserController';
import { Router } from 'express';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';
import { ensureAuthenticated } from '../shared/middleswares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const activeUserController = new ActiveUserController();
const listOneUsersController = new ListOneUsersController();

usersRoutes.use(ensureAuthenticated);
usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.patch('/active/:id', activeUserController.handle);
usersRoutes.get('/:id', listOneUsersController.handle);
usersRoutes.put('/:id', updateUserController.handle);

export { usersRoutes };
