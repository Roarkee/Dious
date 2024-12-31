const express = require('express');
const router=express.Router();
const {updateProjectController,createProjectController,getAllProjectsController,getProjectController,getProjectsByUserController,deleteProjectController} = require('../controllers/projectController');

router.post('/', createProjectController);
router.put('/:id', updateProjectController);
router.delete('/:id', deleteProjectController);
router.get('/:id', getProjectController);
router.get('/:id', getProjectsByUserController);
router.get('/', getAllProjectsController);

module.exports = router;
