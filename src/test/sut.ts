import fastify from "fastify";
import FastifyEnvironmentVarsPlugin, { FastifyEnvVarPluginMetadata } from "..";

export const createSUT = (pluginOptions: FastifyEnvVarPluginMetadata) => {
  return function build(opts = {}) {
    const app = fastify(opts);
    app.register(FastifyEnvironmentVarsPlugin, pluginOptions);
    return app;
  };
};
