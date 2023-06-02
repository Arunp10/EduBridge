const express  = require("express");
const Project  = require('../models/project');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');

router.post('/AddProject',fetchUser, async(req,res)=>{

    try {

        const {projectTitle,startDate,endDate,description} = req.body;
        const project  = new Project({
            
            user : req.user.id , projectTitle,startDate,endDate,description
        })
        const insertProject = await project.save();
        res.json(insertProject).status("Project Add Successfull")
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured :",error);
    }
})

//Route 2 :Get All the Project using:Get 'api/ProjectRoute/fetchProject'
router.get('/fetchProject',fetchUser,async (req,res)=>{
    const project = await Project.find({ user: req.user.id });
    res.json(project)
})

router.get('/fetchProject/:userId',async (req,res)=>{
    const userId = req.params.userId;
    const project = await Project.find({user : userId});
    res.json(project)
})

module.exports = router;