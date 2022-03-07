import { subHours } from 'date-fns';

interface IResponse {
  created_at_america_sao_paulo: Date;
  updated_at_america_sao_paulo: Date;
}

interface IProps {
  date_created?: Date;
  date_updated?: Date;
}

const ConvertDateUTC = ({ date_created, date_updated }: IProps): IResponse => {
  const res = {
    created_at_america_sao_paulo: date_created,
    updated_at_america_sao_paulo: date_updated,
  };

  if (date_created) {
    res.created_at_america_sao_paulo = subHours(new Date(date_created), 3);
  }

  if (date_updated) {
    res.updated_at_america_sao_paulo = subHours(new Date(date_updated), 3);
  }

  return res;
};

export { ConvertDateUTC };
