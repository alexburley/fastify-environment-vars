import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export default fp(async (server: FastifyInstance): Promise<void> => {
  ['IYA_USER_STORE_SECRET', 'PROFILE_TABLE_NAME', 'ENV', 'REGION', 'DAX_CLUSTER'].forEach((key) => {
    if (!process.env[key]) {
      server.log.error({
        event: 'environment-validation-error',
        message: `${key} not present in environment variables`,
      });
      process.exit(1);
    }
  });
});
