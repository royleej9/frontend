// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const request = require("supertest");
const app = require("@webapp/app");
const fs = require("fs");
const path = require("path");
const { moduleAlias } = require("@/aliases.config");

describe("Test the root path", () => {
  test("test", () => {
    // chDir(moduleAlias["@api"]);
    console.log(11);
  });
});

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app).get("/").expect(200);
//   });
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", (done) => {
//     request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", async () => {
//     const response = await request(app).get("/");
//     expect(response.statusCode).toBe(200);
//   });
// });
