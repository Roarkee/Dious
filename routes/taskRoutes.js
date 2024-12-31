const express = require('express');
const router= express.Router();
const { createTaskController, deleteTaskController,updateTaskController,getAllTasksController,getTaskController,addLabelToTaskController, searchTasksController,assignTaskToUserController} = require('../controllers/taskController')

router.post('/', createTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', updateTaskController);
router.get('/:id', getTaskController);
router.get('/', getAllTasksController);
router.put('/:taskId/label/:labelId', addLabelToTaskController);
router.get('/:id', searchTasksController);
router.put('/:id', assignTaskToUserController);


module.exports = router;