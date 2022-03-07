import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';

import { IDataProvider } from '../IDataProvider';

class DayjsDateProvider implements IDataProvider {
  addDays(days: number): Date {
    return dayjs().add(days, 'days').toDate();
  }
  dataDDMMAAAA(date: Date): Date {
    throw dayjs(date).format('DD-MM-YYYY');
  }
}

export { DayjsDateProvider };
