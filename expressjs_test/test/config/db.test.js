// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const request = require("supertest");
const fs = require("fs");
const path = require("path");
const db = require("@config/db");


describe("Test the root path", () => {
  test("test", () => {
    db.connect();
    // const conn = db.getConnection();
    // console.log(conn);
    // console.log(1111111);
  });
});
