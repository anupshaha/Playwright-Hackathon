import { expect, test } from '@playwright/test';

test.describe(`API Testing POC with PW`, ()=>{
    test(`Get users`, async ({ request, baseURL }) => {
        const _response = await request.get(`${baseURL}store/inventory`);
        expect(_response.ok()).toBeTruthy();
        expect(_response.status()).toBe(200);
        console.log(await _response.json());
      });
});
