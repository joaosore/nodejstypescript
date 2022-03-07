import s3Credentials from '@config/s3Credentials';

import { LogsS3 } from '../../Logs/LogsS3';
import { ISendGridProvider } from '../ISendGridProvider';
import { ISendGridProviderDTO } from '../SendGridProviderDTO';

const sgMail = require('@sendgrid/mail');

class SendGridProvide implements ISendGridProvider {
  sendMail({
    name,
    email,
    status,
    boleto_url,
    prod_name,
    type,
  }: ISendGridProviderDTO): Promise<void> {
    let template = '';
    switch (status) {
      case 'paid':
        // Compra Aprovada
        template = 'd-35e75fafa53a4fc8873185ef34152245';
        break;
      case 'unpaid':
      case 'waiting_payment':
        // Aguardando pagamento
        template = 'd-a355b17c607e4deead8659482ca5c9cd';
        break;
      case 'refunded':
        // Compra Recusada
        template = 'd-24e8dcd69bb84447a20a2c13c2ee9b64';
        break;
      default:
        break;
    }

    if (type !== 'credit_card') {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        from: 'no-reply@medway.com.br',
        to: email,
        dynamic_template_data: {
          boleto_url,
          subject: `Status de pagamento: ${prod_name}`,
        },
        template_id: template,
      };

      sgMail
        .send(msg)
        .then(response => {
          LogsS3(
            response,
            s3Credentials.MODULES.providers.sendgridprovider,
            s3Credentials.TYPE.success,
          );
        })
        .catch(error => {
          LogsS3(
            error,
            s3Credentials.MODULES.providers.sendgridprovider,
            s3Credentials.TYPE.erros,
          );
        });
    }
  }
}

export { SendGridProvide };
