const request = require("supertest");
const app = require("./app.js");

describe("GET /", () => {
  describe("Get list of all students", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });

    test("Number of students must be 15", async () => {
      const response = await request(app).get("/");
      expect(response.body.length).toBe(15);
    });
  });
});

describe("GET /olderthan/27", () => {
  describe("Get students older than 27", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/olderthan/27");
      expect(response.statusCode).toBe(200);
    });

    test("Number of students must be 6", async () => {
      const response = await request(app).get("/olderthan/27");
      expect(response.body.length).toBe(6);
    });

    test("Students must be older than 27", async () => {
      const response = await request(app).get("/olderthan/27");
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].age).toBeGreaterThan(27);
    });
  });
});

describe("GET /work", () => {
  describe("Get students thah have work", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/work");
      expect(response.statusCode).toBe(200);
    });

    test("Number of students must be 9", async () => {
      const response = await request(app).get("/work");
      expect(response.body.length).toBe(9);
    });

    test("Students must have work on true", async () => {
      const response = await request(app).get("/work");
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].works).toBeTruthy();
    });
  });
});

describe("GET /no-work", () => {
  describe("Get students thah don't have work", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/no-work");
      expect(response.statusCode).toBe(200);
    });

    test("Number of students must be 9", async () => {
      const response = await request(app).get("/no-work");
      expect(response.body.length).toBe(6);
    });

    test("Students must have work on false", async () => {
      const response = await request(app).get("/no-work");
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].works).toBeFalsy();
    });
  });
});

describe("GET /student/Howard%20Veum", () => {
  describe("Get student by name", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/student/Howard%20Veum");
      expect(response.statusCode).toBe(200);
    });

    test("Number of students must be 1", async () => {
      const response = await request(app).get("/student/Howard%20Veum");
      expect(response.body.length).toBe(1);
    });

    test("Student must be Howard Veum", async () => {
      const response = await request(app).get("/student/Howard%20Veum");
      expect(response.body[0]).toStrictEqual({
        name: "Howard Veum",
        age: 24,
        works: true,
      });
    });
  });
});

describe("GET /total", () => {
  describe("Get total number of students", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).get("/total");
      expect(response.statusCode).toBe(200);
    });

    test("Total of students must be 15", async () => {
      const response = await request(app).get("/total");
      expect(response.body.total).toBe(15);
    });
  });
});
