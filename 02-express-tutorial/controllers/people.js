const { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  if (req.body.name) {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ sucesss: false, message: "Please Provdie a name" });
  }
};

const findPeople = (req, res) => {
  const idToFind = parseInt(req.params.id);
  const person = people.find((p) => p.id === idToFind);

  if (isNaN(idToFind)) {
    return res.status(400).json({ success: false, message: "invalid ID" });
  }

  if (!person) {
    return res.status(404).json({ message: "That person was not found" });
  }
  res.json(person);
};

const updatePerson = (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "invalid ID, entere a number between 1 to 5",
    });
  }

  const person = people.find((p) => p.id === id);

  if (!name) {
    return res.status(404).json({
      success: false,
      message: `No name was entered for person with id ${id} `,
    });
  }

  person.name = name;

  res.status(200).json({ success: true, data: people });
};

const deletePerson = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID, entere a number between 1 to 5",
    });
  }

  const personExists = people.find((p) => p.id === id);

  if (!personExists) {
    return res.status(404).json({
      success: false,
      message: `No person with id ${id} was found`,
    });
  }

  const updatedPeople = people.filter((p) => p.id !== id);
  people.length = 0;
  people.push(...updatedPeople);
  return res.status(200).json({ success: true, data: updatedPeople });
};

module.exports = {
  addPerson,
  getPeople,
  findPeople,
  updatePerson,
  deletePerson,
};
