import authClient from '@config/authClient';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../erros/AppError';

interface IPauload {
  sub: string;
}

export async function ensureClientAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: client_id } = verify(
      token,
      authClient.secret_token,
    ) as IPauload;

    request.user = {
      id: client_id,
    };

    next();
  } catch {
    throw new AppError('Ivalid tokens!', 401);
  }
}
