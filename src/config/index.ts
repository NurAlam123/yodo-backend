const config = {
  PORT: process.env.PORT || 5000,
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/Test',
  SECRET_TOKEN: process.env.SECRET_TOKEN || 'secret',
};

export default config;
