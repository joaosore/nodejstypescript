if (
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'homolog'
) {
  require('dotenv').config();
}

export default {
  BUCKET: process.env.BUCKET,
  MODE_APPLICATION: process.env.MODE_APPLICATION,
  MODULES: {
    zendesk: 'zendesk',
    providers: {},
    debugger: 'debugger',
  },
  TYPE: {
    erros: 'erros',
    success: 'success',
  },
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  SECRER_ACCESS_KEY: process.env.SECRER_ACCESS_KEY,
};
