const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const fetchUser = require("../MiddleWare/fetchUser");
const Education = require("../models/Education");

//Route 1: Insert Data for Education a User Can ADD Education:
router.post("/AddEducation", fetchUser, async (req, res) => {
  try {
    const { InstituteName, degree, startDate, endDate } = req.body;
    const education = new Education({
      user: req.user.id,
      InstituteName,
      degree,
      startDate,
      endDate,
    });
    const InsertEducation = await education.save();
    res.json(InsertEducation);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});

//Route 2 :Get All the Education using:Get 'api/EducationRoute/fetchEducation'
router.get("/fetchEducation", fetchUser, async (req, res) => {
  const education = await Education.find({ user: req.user.id });
  res.json(education);
});

router.get("/fetchEducation/:userId", async (req, res) => {
  const userId = req.params.userId;
  const education = await Education.find({ user: userId });
  res.json(education);
});

module.exports = router;
