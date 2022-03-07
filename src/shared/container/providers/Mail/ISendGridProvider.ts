import { ISendGridProviderDTO } from './SendGridProviderDTO';

interface ISendGridProvider {
  sendMail({
    name,
    email,
    status,
    boleto_url,
    prod_name,
    type,
  }: ISendGridProviderDTO): Promise<void>;
}

export { ISendGridProvider };
