const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Aayush", branch: "CSE" },
  { id: 2, name: "Aman", branch: "ECE" },
  { id: 3, name: "jatin", branch: "ME" },
];

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/students", (req, res) => {
  const branch = req.query.branch;

  const result = students.filter(
    (s) => s.branch.toLowerCase() === branch.toLowerCase(),
  );
  if (result.length === 0) {
    return res.status(404).send("This branch is empty");
  }
  res.json(result);
});

app.get("/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.json(student);
});

// app.get("/students", (req, res) => {
//   res.json(students);
// });
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
