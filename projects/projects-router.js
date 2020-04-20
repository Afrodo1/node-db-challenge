const express = require('express');

const projects = require('./projects-model');
const router = express.Router();

router.get('/', (req,res) =>{
    projects.find()
    .then(project => {
        res.json(project);
    })
    .catch(err =>{
        res.jsonjson({message: 'failed to get projects'})
    });
});

router.get('/:id', (req,res)=>{
    const {id} = req.params;

    projects.findById(id)
        .then(project =>{
            res.json(project);
        })
        .catch(err =>{
            res.status(500).json({message: 'failed to retrieve project'})
        });
});

router.get('/:id/resources' ,(req,res) => {
    const {id} = req.params;

    projects.findResources(id)
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({message: 'resources not found', err})
        });
});

router.get('/:id/tasks', (req,res) =>{
    const {id} = req.params;

    projects.findTasks(id)
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({message:'tasks not found', err})
        });
});

module.exports = router;