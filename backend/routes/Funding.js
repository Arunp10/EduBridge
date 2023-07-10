const express = require('express');
const router = express.Router();
const multer = require("multer");
const fetchUser  = require('../MiddleWare/fetchUser');
const Funding = require('../models/Funding');


// Configure multer storage
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, '../src/components/document');
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname);
	},
  });
  
  // Create multer upload instance
  const upload = multer({ storage: storage });


//Router 1: API to Post funding by Professional:
router.post('/post',fetchUser,upload.single('file'),async(req,res)=>{
    const {title,description,visibility,link} = req.body;
    const  fileName  = req.file.filename;
    try {
        const postFunding = await Funding({
            postBy: req.user.id,
            title: title,
            description : description,
            visibility : visibility,
            link: link,
            file: fileName
        })
        await postFunding.save();
        res.status(200).json({message : "Funding Post Successful"})

    } catch (error) {
        console.error({"Error" : error})
        res.status(500).json({"Error": "Some Inernal Error in API"})
    }
})

router.get('/fetch',async(req,res)=>{

    const funding = await Funding.find().populate({
        path:'postBy',
        select: 'firstName lastName occupation image' 
      })
    try {
    
        res.json(funding)
            
    } catch (error) {
        console.error({"Error" : error})
        res.status(500).json({"Error": "Some Inernal Error in API"})
    }
    
})

module.exports = router;