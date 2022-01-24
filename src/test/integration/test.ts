import { createSUT } from "../sut";

const server = createSUT({ variables: ["SOME_ENV_VARIABLE"] })({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.listen(3000, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
