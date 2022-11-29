//import { FullConfig } from "@playwright/test";
import { request } from '@playwright/test';

import * as dotenv from "dotenv";
import rimraf from "rimraf";
import ENV from '@utils/ENV';


async function GlobalSetup() {

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
    await requestContext.post(`http://automation2022-1-poll-mysql.aws.akana.roguewave.com:7900/api/login`,{
    data:{
      "email":"administrator@atmosphere",
      "password":"Passw0rd!"
    }
  });
  // Save signed-in state to 'storageState.json'.
  await requestContext.storageState({ path: 'storageState.json' });
  await requestContext.dispose();
}
export default GlobalSetup;