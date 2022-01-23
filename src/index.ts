import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

export interface FastifyEnvVarPluginMetadata {
  variables: string[];
}

export default fp(
  async (
    server: FastifyInstance,
    options: FastifyEnvVarPluginMetadata
  ): Promise<void> => {
    const { variables = [] } = options;
    const errs = [];
    variables.forEach((key) => {
      if (!process.env[key]) {
        errs.push([
          {
            event: "environment-validation-error",
            message: `${key} not present in environment variables`,
          },
        ]);
        process.exit(1);
      }
    });
    if (errs.length) {
      errs.forEach((err) => {
        server.log.error(err);
      });
      process.exit(1);
    }
  }
);
