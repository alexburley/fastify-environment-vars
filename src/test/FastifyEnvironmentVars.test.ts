import Sinon, { SinonSandbox, SinonStub } from "sinon";
import tap from "tap";
import { createSUT } from "./sut";

let sandbox: SinonSandbox;
let processExitStub: SinonStub;

tap.beforeEach(() => {
  sandbox = Sinon.createSandbox();
  processExitStub = sandbox.stub(process, "exit");
});

tap.afterEach(() => {
  sandbox.restore();
});

tap.test("Should end process if env var is missing", async (t) => {
  delete process.env.someEnvVar;
  await createSUT({ variables: ["someEnvVar"] })();
  t.equal(processExitStub.calledWith(1), true);
});

tap.todo("Should succeed if no environment vars are missing", async (t) => {
  await createSUT({ variables: ["USER"] })();
  t.equal(processExitStub.calledWith(1), false);
});

tap.todo("Should succeed if no variables are passed as options", async (t) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await createSUT({} as any)();
  t.equal(processExitStub.calledWith(1), false);
});

tap.todo("Should log the env var that isn't present");
tap.todo("Should log all env vars that are not present");
