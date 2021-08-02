const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = (message) => {
  console.info('**********');
  console.info(`Message:\n\t${message}`);
  console.info('**********');
};

export default {
  port: env.PORT || 8080
};
