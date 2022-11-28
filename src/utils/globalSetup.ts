//import { FullConfig } from "@playwright/test";

import * as dotenv from "dotenv";
import rimraf from "rimraf";


async function globalSetUp() {

    await new Promise(resolve => {
        rimraf(`./allure-report`, resolve);
    });

    if (process.env.test_env) {
        dotenv.config({
            path: `test_data/env/.env.${process.env.test_env}`,
            override: true
        });
    }
}
export default globalSetUp;