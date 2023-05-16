const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const fetchUser = require('../MiddleWare/fetchUser');
var jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
	try {

		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		// const token = user.generateAuthToken();
		const data = {
			user: {
			  id: user.id,
			  
			}
		  }
		  const authToken = jwt.sign(data, process.env.JWTPRIVATEKEY );
		
		res.status(200).send({occupation : user.occupation, Token: authToken, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

router.get('/getUser', fetchUser, async (req, res) => {
	try {
	  const userId = req.user.id;
	  const user = await User.findById(userId).select("");
	  res.send(user);
	} catch (error) {
	  console.error(error.message);
	  res.status(500).send("Internal Some Error");
	}
  });
module.exports = router;