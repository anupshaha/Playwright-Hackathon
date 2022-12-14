//import { FullConfig } from "@playwright/test";
import { request } from '@playwright/test';

import * as dotenv from "dotenv";
import rimraf from "rimraf";

async function GlobalSetup() {

  rimraf(`./allure-results/*`, function () { console.log(`done`); });

  await new Promise(resolve => {
    rimraf(`./allure-report`, resolve);
  });

  if (process.env.test_env) {
    dotenv.config({
      path: `test_data/env/.env.${process.env.test_env}`,
      override: true
    });
  }

  const requestContext = await request.newContext();
    await requestContext.post(`http://automation-mysql80-mongo42.aws.akana.roguewave.com:7900/api/login`,{
    data:{
      "email":`administrator@atmosphere`,
      "password":`Passw0rd!`
    }
  });
  // Save signed-in state to 'storageState.json'.
  await requestContext.storageState({ path: `storageState.json` });
  await requestContext.dispose();
}
export default GlobalSetup;