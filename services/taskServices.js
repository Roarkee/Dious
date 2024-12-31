const {Task, User, FileAttachment, Comment, Label, Project} = require('../models');
const {Op} = require('sequelize');
//create a new task
const createTask = async(taskData) => {
    try{
        
        const task = await Task.create(taskData);
        return task;
    } catch(error){
        console.log('couldn\'t create task',error);
        throw new Error('There seems to be an error')
    }
}

//get all tasks
const getAllTasks = async() => {
    try{
        const tasks = await Task.findAll({

            include: [
                {model: User, as: 'assigned_to'},
                {model: FileAttachment, as: 'fileattachments'},
                {model: Comment},
                {model: Label},
                {model: Project}
            ]
        });
        return tasks;

    } catch(error){
        console.error(error)
        throw new Error('Cannot get all the tasks at this moment') 
    }
} 

//find a task 
const getTask = async(id) => {
    try{
        const task = await Task.findByPk(id, {

            include: [
                {model: User, as: 'assigned_to'},
                {model: FileAttachment, as: 'fileattachments'},
                {model: Comment},
                {model: Label},
                {model: Project}
            ]
        });
        if(!task){
            throw new Error('Task not found')
        }
        return task;
    }catch(error){
        console.error(error)
        throw new Error('An error occured when fetching task')

    }
}
//update a task
const updateTask = async (id, taskData) => {
    const task = await getTask(id);
    if(!task){
        throw new Error('Task not found');
    }
    return await task.update(taskData);

}


// Delete Task
const deleteTask = async (id) => {
    const task = await Task.findByPk(id);
    if (!task) return null;
    await task.destroy();
    return task;
};

// Add Label to Task
const addLabelToTask = async (taskId, labelId) => {
    const task = await getTask(taskId);
    const label = await Label.findByPk(labelId);
    if (task && label) {
        await task.addLabel(label);
        return task;
    }
    return null;
};

//assign a task to a user
const assignTaskToUser = async(taskId,userId) => {
    try{
        const task = await getTask(taskId);
        const user = await User.findByPk(userId);
        if(task && user){
            task.assigned_to= userId;
            await task.save();
            return task;
        } else {
            throw new Error(`No user with ${userId} found`);
        }
    }catch(error){
        console.error(error);
        throw new Error('An error occured when assigning task to user');
    }

};

//add a comment to a task
const addCommentToTask = async (taskId, commentData) => {
    try{
        const task = await getTask(taskId);
        if(!task){
            throw new Error('No task with the given id found');
        }
        const comment = await Comment.create({...commentData, taskId});
        return comment;
    }catch(error){
        console.error(error);
        throw new Error('An error occurred when adding a comment to the task');
    }
}

//add a file to a task
const addFileToTask = async (taskId, fileData) => {
    try{
        const task = await getTask(taskId);
        if(!task){
            throw new Error('No task with the given id found');
        }
        const file = await File.create({...fileData, entityId: taskId, entityType: 'task'});
        return file;
    }catch(error){
        console.error(error);
        throw new Error('An error occurred when adding a file to the task');
    }
}

const searchTasks = async (query) => {
    const tasks = await Task.findAll({
        where: {
            [Op.or]: [
                { name: { [Op.iLike]: `%${query}%` } },
                { description: { [Op.iLike]: `%${query}%` } }
            ]
        }
    });

    return tasks;
};




module.exports= {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    addLabelToTask, 
    searchTasks,
    addCommentToTask,
    addFileToTask,
    assignTaskToUser,

}