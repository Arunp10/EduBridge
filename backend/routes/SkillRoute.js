const express  = require("express");
const Skill  = require('../models/skill');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');

router.post('/AddSkill',fetchUser, async(req,res)=>{
    try {

        const {skillName} = req.body;

        const skill  = new Skill({
            user : req.user.id , skillName
        })
        const insertSkill = await skill.save();
        res.json(insertSkill).status("Skill Add Successfull")
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured :",error);
    }
})

module.exports = router;