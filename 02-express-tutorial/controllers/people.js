const { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
  console.log(people);
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

  if (!person) {
    return res.status(404).json({ message: "That person was not found" });
  }
  res.json(person);
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${id} was found` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(404).json({
      success: false,
      message: `No person with id ${req.params.id} was found`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  addPerson,
  getPeople,
  findPeople,
  updatePerson,
  deletePerson,
};
