import s3Credentials from '@config/s3Credentials';
import AWS from 'aws-sdk';
import { v4 as uuidV4 } from 'uuid';

// const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: s3Credentials.ACCESS_KEY_ID,
  secretAccessKey: s3Credentials.SECRER_ACCESS_KEY,
});

async function LogsS3(
  body: string,
  folders: string,
  type: string,
  status?: string,
  date?: string,
  id?: string,
): Promise<void> {
  let data = new Date();
  if (date) {
    data = new Date(date);
  }

  const dataFormatada = `${data.getFullYear()}-${
    data.getMonth() + 1
  }-${data.getDate()}`;

  let folder = `${s3Credentials.BUCKET}/raw/${s3Credentials.MODE_APPLICATION}/${folders}/${type}/${dataFormatada}`;

  if (status) {
    folder = `${s3Credentials.BUCKET}/raw/${s3Credentials.MODE_APPLICATION}/${folders}/${type}/${dataFormatada}/${status}`;
  }

  let name = uuidV4();
  if (id) {
    name = id;
  }

  await s3.putObject(
    {
      Bucket: `${folder}`,
      Key: `${name}.json`,
      Body: JSON.stringify(body),
      ContentType: 'application/json',
    },
    function (err, data) {
      console.log(
        `Successfully uploaded Log Módulo: (${folders}) Tipo: (${type}).`,
      );
      // console.log(`${JSON.stringify(err)} ${JSON.stringify(data)}`);
    },
  );
}

export { LogsS3 };
