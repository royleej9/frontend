// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const request = require("supertest");
const app = require("@webapp/app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app).get("/api/sample/data").expect(200);
  });
});
