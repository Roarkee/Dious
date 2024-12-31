const express = require('express');
const {createUserController, updateUserController, deleteUserController, getAllUsersController,getUserController} = require('../controllers/userController');


const router=express.Router();


router.get('/users/:id',getAllUsersController);
router.get('/users',getUserController);
router.post('/users',createUserController);
router.put('/users/:id',updateUserController);
router.delete('/users/:id',deleteUserController);


module.exports =router;