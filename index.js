require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

// Callback function for morgan custom token
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

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
// ];

app.get("/api/persons", (request, response, next) => {
  Person.find({})
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => next(error));
});

app.get("/info", (request, response) => {
  const date = Date();
  response.send(
    `<p>Phonebook has info for ${Person.length} people</p>\n<p>${date}</p>`
  );
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.find({ _id: id })
    .then((res) => {
      if (res.length !== 0) response.json(res);
      else response.status(404).end();
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((res) => response.status(204).end())
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  // if (persons.map((x) => x.name).includes(person.name))
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => response.json(savedPerson))
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const person = { ...request.body };
  console.log(person);

  Person.findByIdAndUpdate(request.params.id, person, {
    runValidators: true,
    new: true,
  })
    .then((updatedPerson) => {
      if (updatedPerson) response.json(updatedPerson);
      else response.status(404).end();
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "Malformatted ID" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
