import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { homeRoutes } from './home.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/', homeRoutes);

router.use('/auth', authenticateRoutes);

router.use('/users', usersRoutes);

export { router };
