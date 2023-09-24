import { test, expect } from '@playwright/test';
import { APIRequestMethod } from '../../pageObjectPages/apiMethods';
import * as apiEndPoints from '../../data/api/apiEndPoints.json';
import * as apiData from '../../data/api/apiData.json';

const random = Math.random();
const userName = `${apiData.username}` + random;
let userId;
let accessToken;

test.describe.serial("Demo QA API Testing", () => {
  let apiRequestMethod;

  test.beforeEach(async ({ request }) => {
    apiRequestMethod = new APIRequestMethod(request);
  });

  test("Creation of user account", async () => {
    const apiBody = {"userName": userName, "password": `${apiData.password}`};
    const headers = {"Accept": "application/json"};

    const response = await apiRequestMethod.postAPI(`${apiEndPoints.userCreation}`, apiBody, headers);
   
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    userId = responseUser.userID;
  });

  test("Unhappy Flow - Create User Account (Invalid Data)", async () => {
    const apiBody = {"userName": userName, "password": `${apiData.password}`};
    const headers = {"Accept": "application/json"};

    const response = await apiRequestMethod.postAPI(`${apiEndPoints.userCreation}`, apiBody, headers);

    expect(response.status()).not.toBe(201);
    
    const responseBody = await response.json();
    const errorMsg = responseBody.message
    expect(errorMsg).toEqual(`${apiData.userExist}`);
  });

  test("Generation of Access Token of Created User", async () => {
    const apiBody = {"userName": userName, "password": `${apiData.password}`};
    const headers = {"Accept": "application/json"};

    const response = await apiRequestMethod.postAPI(`${apiEndPoints.generateToken}`, apiBody, headers);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    accessToken= responseUser.token;
  })

  test("UnHappy Flow - Generation of Access Token of Created User", async () => {
    const apiBody = {"userName": "test@5454", "password": `${apiData.password}`};
    const headers = {"Accept": "application/json"};

    const response = await apiRequestMethod.postAPI(`${apiEndPoints.generateToken}`, apiBody, headers);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    const resultMsg= responseUser.result;
    expect(resultMsg).toEqual(`${apiData.authFailedMsg}`)
  })

  test("Add a list of books", async () => {

    const apiBody = {"userId": userId, "collectionOfIsbns": [{"isbn": `${apiData.isbn1}`},{"isbn": `${apiData.isbn2}`},{"isbn": `${apiData.isbn3}`}]};
    const headers = {"Accept": "application/json","Authorization" : `Bearer ${accessToken}`}

    const response = await apiRequestMethod.postAPI(`${apiEndPoints.addBooks}`, apiBody, headers);
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
  })

  test("Remove one of the added books", async () => {

    const apiBody = {"isbn": `${apiData.isbn1}`,"userId": userId};
    const headers = {"accept": "application/json","Content-Type": "application/json","Authorization": `Bearer ${accessToken}`};

    const response = await apiRequestMethod.deleteAPI(`${apiEndPoints.deleteBook}`, apiBody, headers);
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
  })
});
