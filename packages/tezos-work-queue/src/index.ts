import dotenv from "dotenv";
dotenv.config();

import { NatsRunner } from "@jwalab/nats-runner";

export { TezosWorkerTokenizationConfirmation } from "./TezosWorkQueue";

const natsRunner = new NatsRunner(__dirname);

natsRunner.start();
