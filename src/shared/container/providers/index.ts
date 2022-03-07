import { container } from 'tsyringe';

import { IDataProvider } from './DataProvider/IDataProvider';
import { DayjsDateProvider } from './DataProvider/implementations/DayjsDateProvider';
import { SendGridProvide } from './Mail/implementations/SendGridProvider';
import { ISendGridProvider } from './Mail/ISendGridProvider';

container.registerSingleton<IDataProvider>(
  'DayjsDateProvider',
  DayjsDateProvider,
);

container.registerSingleton<ISendGridProvider>(
  'SendGridProvider',
  SendGridProvide,
);
