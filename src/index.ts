import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

export interface FastifyEnvVarPluginMetadata {
  variables: string[];
}

const FastifyEnvironmentVarsPlugin = fp(
  async (
    server: FastifyInstance,
    options: FastifyEnvVarPluginMetadata
  ): Promise<void> => {
    const { variables = [] } = options;
    const errs = variables.flatMap((key) => {
      const envVarExists = !!process.env[key];
      return envVarExists
        ? []
        : [
            {
              event: "environment-validation-error",
              message: `${key} not present in environment variables`,
            },
          ];
    });
    if (errs.length) {
      errs.forEach((err) => {
        server.log.error(err);
      });
      process.exit(1);
    }
  }
);

export default FastifyEnvironmentVarsPlugin;
