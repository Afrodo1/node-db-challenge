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

router.post('/', (req,res)=>{
    const data = req.body;

    projects.addProject(data)
        .then((project) => res.status(200).json(project))
        .catch((err)=> res.status(500).json({message:'failed to add project', err}));
});


router.post('/tasks/', (req,res)=>{

    projects.addTask()
        .then(project =>{
            console.log(project);
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({message:"couldn't add task", err});
        });
});

module.exports = router;