const express = require('express');

const projects = require('./resource-model');

const router = express.Router();

router.get('/'), (req,res) =>{
    
    projects.find()
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({message:"failed to show resources", err});
        });
};

router.post('/', (req,res)=>{

    projects.add()
        .then(project =>{
            console.log(project);
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({message:"couldn't add resource", err});
        });
});

module.exports = router;
