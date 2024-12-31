const {getAllProjects, getProject, getProjectsByUser, deleteProject, updateProject, createProject} = require('../services/projectServices')

const getProjectController = async(req, res) => {
    try{
        const project = await getProject(req.param.id);
        res.status(200).json(project);
    } catch(error){
        res.status(404).json({message: 'Project not found'});
    }
}

const createProjectController = async(req, res) => {
    try{
        const project = await createProject(req.body);
        res.status(200).json(body);
    }catch(error){
        res.status(400).json({message: 'Error creating project'});
    }
}

const getAllProjectsController = async(req, res) => {
    try{
        const projects = await getAllProjects();
        res.status(200).json(projects);
    } catch(error){
        res.status(404).json({message: 'No projects found'});
    }
}

const getProjectsByUserController = async(req, res) => {
    try{
        const projects = await getProjectsByUser(req.params.id);
        res.status(200).json(projects);
    }catch(error){
        res.status(404).json({message: 'No projects found'});
    }

}

const deleteProjectController = async(req, res) => {
    try{
        const project = await deleteProject(req.params.id);
        res.status(200).json({message: 'Project deleted'});

    }catch(error){
        res.status(503).json({message: 'Server couldn\'t handle the request'});
    }
}

const updateProjectController = async(req, res) => {
    try{
        const project = await updateProject(req.params.id, req.body);
        res.status(200).json(project);
    }catch(error){
        res.status(400).json({message: 'Error updating project'});
    }
}



module.exports = {
    getProjectController,
    createProjectController,
    getAllProjectsController,
    getProjectsByUserController,
    deleteProjectController,
    updateProjectController
}