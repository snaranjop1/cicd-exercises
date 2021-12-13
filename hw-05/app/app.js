const express = require("express");

const app = express();

const students = [
  { name: "Charlene Smith III", age: 27, works: false },
  { name: "Jamie McClure IV", age: 29, works: true },
  { name: "Ramon Kuhlman", age: 23, works: true },
  { name: "Ellen Wilderman", age: 35, works: false },
  { name: "Dwight Mosciski", age: 27, works: false },
  { name: "Howard Veum", age: 24, works: true },
  { name: "Faith Ullrich", age: 35, works: true },
  { name: "Terrence Hackett", age: 22, works: true },
  { name: "Tyler Dickinson", age: 21, works: true },
  { name: "Dr. Kelly Lakin", age: 34, works: true },
  { name: "Miss Jerome Waters", age: 26, works: false },
  { name: "Jose Price", age: 24, works: false },
  { name: "Cameron Schuster", age: 33, works: true },
  { name: "Van Grimes DVM", age: 35, works: false },
  { name: "Randy Stanton I", age: 18, works: true },
];

app.get("/", function (req, res) {
  return res.send(students);
});

app.get("/olderthan/:age", function (req, res) {
  let filtered = students.filter((student) => student.age > req.params.age);
  return res.send(filtered);
});

app.get("/work", function (req, res) {
  let filtered = students.filter((student) => student.works);
  return res.send(filtered);
});

app.get("/no-work", function (req, res) {
  let filtered = students.filter((student) => !student.works);
  return res.send(filtered);
});

app.get("/student/:name", function (req, res) {
  let filtered = students.filter((student) => student.name === req.params.name);
  return res.send(filtered);
});

app.get("/total", function (req, res) {
  return res.send({ total: students.length });
});

module.exports = app;
