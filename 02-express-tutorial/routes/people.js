const express = require("express");
const router = express.Router();

const {
  addPerson,
  getPeople,
  findPeople,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", addPerson);

router.get("/:id", findPeople);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
