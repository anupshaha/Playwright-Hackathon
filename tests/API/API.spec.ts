import { expect, test } from '@playwright/test';

test.describe(`API and APP Contract`,()=>{
  const apiVersion = `SVPtKiIGNQ6M3zrhuLpvNnNBPqHdK4mjt7GDYHJ2.automation2022-1`;
  test(`Get Contract Details`,async({request,baseURL}) =>{
    const apiVersion = `SVPtKiIGNQ6M3zrhuLpvNnNBPqHdK4mjt7GDYHJ2.automation2022-1`;
    const _response = await request.get(`${baseURL}api/apps/versions/${apiVersion}/contracts`);
    expect(await _response.ok()).toBeTruthy();
    expect(await _response.status()).toBe(200);
    const obj = await _response.json();
    console.log(obj.channel.item[0].EntityReferences.EntityReference[1].Title);
  });
});