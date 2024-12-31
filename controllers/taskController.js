const {createTask, getAllTasks, getTask, updateTask, deleteTask, addLabelToTask, searchTasks, assignTaskToUser, } = require('../services/taskServices');

const createTaskController = async(req, res) => {
    try{ 
        const task = await createTask(req.body);
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
const getAllTasksController = async(req, res) => {
    try{
        const tasks = await getAllTasks();
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


// Get Single Task Controller
const getTaskController = async (req, res) => {
    const { id } = req.params; // Get the task id from URL params
    try {
        const task = await getTask(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Task Controller
const updateTaskController = async (req, res) => {
    const { id } = req.params; // Get the task id from URL params
    try {
        const task = await updateTask(id, req.body);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Task Controller
const deleteTaskController = async (req, res) => {
    const { id } = req.params; // Get the task id from URL params
    try {
        const task = await deleteTask(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add Label to Task Controller
const addLabelToTaskController = async (req, res) => {
    const { taskId, labelId } = req.params; // Get taskId and labelId from URL params
    try {
        const task = await addLabelToTask(taskId, labelId);
        if (!task) {
            return res.status(404).json({ message: 'Task or label not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchTasksController = async(req, res) => {
    const { query } = req.params;
    try{
        const search = await searchTasks(query);
        if(!search){
            res.status(404).json({message: 'No task found'})
        }
        res.status(200).json(search);
    }catch(error){
        console.error("couldn't search for the tast", error)
        res.status(500).json({message: error.message})
    }
}

const assignTaskToUserController = async(req, res) => {
    try{
        const {taskId, userId} = req.params;
        const task = await assignTaskToUser(taskId, userId);
        res.status(200).json({message: 'assigned successfully'})
    } catch(error){
        console.error("couldn't assign task to user", error)
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    createTaskController,
    getAllTasksController,
    getTaskController,
    updateTaskController,
    deleteTaskController,
    addLabelToTaskController,
    assignTaskToUserController,
    searchTasksController,
};
