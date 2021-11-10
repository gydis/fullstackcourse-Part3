const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const callback = (req, res) => {
  if (req.method === "POST") return JSON.stringify(req.body, null, 0);
  else return " ";
};
morgan.token("content", callback);
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :content"
  )
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = Date();
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>\n<p>${date}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((x) => x.id === id);

  if (person) response.json(person);
  else response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((x) => x.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const person = { ...request.body };

  if (!person.name || !person.number)
    return response.status(400).json({
      error: "content missing",
    });

  if (persons.map((x) => x.name).includes(person.name))
    return response.status(400).json({
      error: "name must be unique",
    });

  person.id = Math.round(Math.random() * 500000 + 1);
  persons = persons.concat(person);
  response.json(person);
});

app.put("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = { ...request.body };

  if (person.name === persons.find((x) => x.id === id).name) {
    persons.map((x) => (x.id === id ? person : x));
    return response.json(person);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
