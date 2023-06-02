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

//Route 2 :Get All the Skill using:Get 'api/SkillRoute/fetchSkill'
router.get('/fetchSkill',fetchUser,async (req,res)=>{
    const skill = await Skill.find({ user: req.user.id });
    res.json(skill)
})

router.get('/fetchSKill/:userId',async (req,res)=>{
    const userId = req.params.userId;
    const skill = await Skill.find({user : userId});
    res.json(skill)
})

module.exports = router;