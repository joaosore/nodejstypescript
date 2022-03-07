import { Request, Response, Router } from 'express';

const homeRoutes = Router();

homeRoutes.get('/', (request: Request, response: Response): Response => {
  return response.json({ message: 'API Datasolutions Homolog v1.0.0' });
});

export { homeRoutes };
