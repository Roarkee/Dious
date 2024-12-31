const {User} = require('../models');

//to create a user
const createUser = async (userData) => {
    try{
        const user = await User.create(userData);
        return user;
    } catch(error){
        console.error('We were not able to create the user\n Try again at a different time',error);
    }
}

//to fetch a user 
const getUser = async (id) => {
    try{  
    const user= await User.findByPk(id)
    if (!user){
        throw new Error('User not found')
    }
    return user;
    } catch(error){
        console.error("An error occured when getting your user", error)
        throw new Error(error.message)
    }
}

//to get all users
const getAllUsers = async () => {
    try{
        const users = await User.findAll();
        return users;
    } catch (error){
        console.error('could not get all information', error)
    }
}

//to update a user

const updateUser = async(id, updateData) => {
    try{
        user = await getUser(id);
        user.update(updateData);
        return user;
        } catch(error){
            console.error('couldn\'t update the user', error)
            throw new Error(error)
        }
}

//deleting a user

const deleteUser = async (id) => {
    try{
        const user = await getUser(id);
        await user.destroy()
    } catch(error){
        throw new Error('couldn\'t delete user. you\'re in the matrix now')
    }
}

const assignRoleToUser = async(id, role) => {
    try{
        const user = await getUser(id);
        if(!['admin', 'project manager', 'team member', 'guest', 'viewer'].includes(role)){
            throw new Error('Invalid role')
        }
        await user.update(role);
        return user;
    }catch(error){
        console.error('could not assign role to user', error)
        throw new Error(error.message)
    }
}


module.exports = {
    deleteUser,
    getUser,
    createUser,
    updateUser,
    getAllUsers,
    assignRoleToUser,
}