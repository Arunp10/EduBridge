const express = require('express');
const router = express.Router();
const multer = require("multer");
const fetchUser  = require('../MiddleWare/fetchUser');
const Funding = require('../models/Funding');
const { Connections } = require('../models/Connections');


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
    const {description,visibility,link} = req.body;
    const  fileName  = req.file.filename;
    try {
        const postFunding = await Funding({
            postBy: req.user.id,
            // title: title,
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

router.get('/fetch',fetchUser,async(req,res)=>{

  const funding = await Funding.find();
  // const Connectionfunding = await Funding.find().populate({
  //   path:'postBy',
  //   select: 'firstName lastName occupation image' 
  // })
  const Everyfunding = await Funding.find({visibility: 'everyone'}).populate({
    path:'postBy',
    select: 'firstName lastName occupation image' 
  })

  const postByArray = funding.map((fundingItem) => fundingItem.postBy.toString());

  const existingRequest = await Connections.findOne({
      user: req.user.id,
      supervisor: { $in: postByArray },
  });

    try{
      if (existingRequest) {
          const connectionFunding = await Funding.find({
          postBy: existingRequest.supervisor}).populate({
            path:'postBy',
            select: 'firstName lastName occupation image' 
          });
        return res.status(200).json(connectionFunding);
        
      }else{
        return res.status(200).json(Everyfunding);
      }
            
    } catch (error) {
        console.error({"Error" : error})
        res.status(500).json({"Error": "Server Inernal Error"})
    }

})

module.exports = router;