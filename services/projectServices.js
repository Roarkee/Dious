const {Project, Team, User} =require('../models')


//create a project
const createProject = async (projectData) => {
    try{
        const project= await Project.create(projectData);
        return project;
    }catch(error){
        console.error('error creating project',error);
        throw new Error("Couldn't create the projects for this user");
    }

}

//get all projects
const getAllProjects = async()=>{
    try{
    const projects = await Project.findAll({
        include: [{model: User, as: 'owner'}, {model: Team, as: 'team'}]
    });        
        return projects;
    } catch(error){
        console.error('error getting all projects',error);
        throw new Error("Couldn't get all the projects");
    }
};

//get a particular project by id

const getProject = async (id) => {
    try{
        const project = await Project.findByPk(id,{
            include: [{model: User, as: 'owner'}, {model: Team, as:'team'}]
        });
        if(!project){
            throw new Error ('project not found');
        }
        return project;

    }catch(error){
        console.error('error getting project',error);
        throw new Error("Couldn't get the project for this user");
    }
};

//update a project status

const updateProject = async(id, projectData) =>{

    try{
        const project= await getProject(id);
        await project.update(projectData);
        return project;

    }catch(error){
        console.error('Couldn\'t update project', error);
        throw new Error("Couldn't update the projects for this user");
    }
}

const deleteProject = async(id)=> {
    try{
        const project = await getProject(id);
        await project.destroy();
    } catch(error){
        console.error('error deleting project',error);
        throw new Error("Couldn't delete the projects for this user");
    }
};

const getProjectsByUser = async (id)=>{
    try{
        const projects = await Project.findAll({
            where: {ownerId: id},
            include: [{model: Team, as: 'team'}]
         })
    } catch(error){
        console.error('error getting projects by user',error);
        throw new Error("Couldn't get the projects for this user");
    }
}

const assignTeamToProject = async (projectId, teamId)=>{
    const project = await getProject(projectId);
    const team = await Team.findOne({where: {id: teamId}});
    project.setTeam(team);
    
}



module.exports = {
    createProject,
    getProject,
    updateProject,
    deleteProject,
    getProjectsByUser,
    getAllProjects,
    assignTeamToProject,
}