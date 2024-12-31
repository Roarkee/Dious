const {createUser, updateUser, getAllUsers, getUser, deleteUser} = require('../services/userServices');

//in your controller directory, you call functions from your services
//to handle requests from your routes

const createUserController = async (req, res) => {
    try{
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};
const updateUserController = async (req, res) => {
    try{
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

const getUserController = async (req, res) => {
    try {
      const user = await getUser(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get all users
  const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteUserController = async(req, res) =>{
    try{
        const user = await deleteUser(req.params.id);
        res.status(200).json({message:'User deleted successfully'});

    }catch(error){
        res.status(500).json({message: error.message});
    }
  };



  module.exports = {
    createUserController,
    updateUserController,
    getUserController,
    getAllUsersController,
    deleteUserController
    
  }
