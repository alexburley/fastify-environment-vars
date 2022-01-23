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
    variables.forEach((key) => {
      if (!process.env[key]) {
        server.log.error({
          event: "environment-validation-error",
          message: `${key} not present in environment variables`,
        });
        process.exit(1);
      }
    });
  }
);
