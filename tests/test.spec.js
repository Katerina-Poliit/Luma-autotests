import { test, expect, request } from '@playwright/test'

const baseApiURL = 'https://reqres.in/api'

test('create user', async ({ request }) => {
    const response = await request.post(`${baseApiURL}/register`, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol",
        }



    })

    //    console.log(response.ok());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    // console.log(await response.json());
})