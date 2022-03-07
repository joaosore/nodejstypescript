import { Router } from 'express';

// import { AppError } from '@shared/erros/AppError';

const cors = require('cors');

let url = [];

switch (process.env.NODE_ENV) {
  case 'production':
    url = ['https://'];
    break;
  case 'homolog':
    url = ['https://', 'https://'];
    break;
  default:
    url = ['http://localhost:3000'];
    break;
}

const corsRouter = Router();

corsRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,',
  );
  next();
});

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (url.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new AppError(`Aplication is not authorized`));
//     }
//   },
//   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS'],
// };

corsRouter.use(cors());
// corsRouter.use(cors(corsOptions));

export { corsRouter };
