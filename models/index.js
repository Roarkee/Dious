const User = require('./Users')
const Project = require('./projects')
const Task = require('./tasks')
const Comment = require('./comments')
const Label = require('./label')
const ActivityLog = require('./activityLog')
const FileAttachment = require('./fileattachment')
const Notification = require('./notification')
const TaskLabel = require('./taskLabel')
const TeamMember = require('./teamUser')
const Team = require('./team')
const {sequelize} = require('../config/db')



User.belongsToMany(Team, {
    through: TeamMember,
    foreignKey: 'userId',
    otherKey: 'teamId',
    as: 'teams'

})
Team.belongsToMany(User, {
    through: TeamMember,
    foreignKey: 'userId',
    otherKey: 'teamId',
    as: 'users'
})

User.hasMany(Project, {foreignKey: 'ownerId',});
Project.belongsTo(User, {foreignKey: 'ownerId'});

User.hasMany(Comment, {foreignKey: 'userId'});
Comment.belongsTo(User, {foreignKey: 'userId', as: 'author'});

User.hasMany(Task, {foreignKey: 'assigned_to'});
Task.belongsTo(User, {foreignKey: 'assigned_to', onDelete: 'SET NULL'})

User.hasMany(ActivityLog,{foreignKey:'userId'});
ActivityLog.belongsTo(User,{foreignKey:'userId'});

User.hasMany(Notification,{foreignKey: 'userId', as: 'notifications'});
Notification.belongsTo(User,{foreignKey: 'userId', as: 'userNotifications'});

User.hasMany(FileAttachment, {foreignKey: 'userId', as: 'files'});
FileAttachment.belongsTo(User, {foreignKey: 'userId', as: 'uploader'});

Team.hasMany(Project, {foreignKey: 'teamId', onDelete: 'SET NULL', onUpdate: 'CASCADE'});
Project.belongsTo(Team, {foreignKey: 'teamId',  onDelete: 'SET NULL', onUpdate: 'CASCADE'});``

Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId', onDelete: 'CASCADE' });

Project.hasMany(FileAttachment, { foreignKey: 'entityId', as: 'fileattachments', scope: {entityType: 'project'},});
FileAttachment.belongsTo(Project, { foreignKey: 'entityId', as: 'project',})

Task.hasMany(FileAttachment, {foreignKey: 'entityId', as:'fileattachments', scope: {entityType: 'task'}});
FileAttachment.belongsTo(Task, {foreignKey: 'entityId', as: 'task',});

Task.hasMany(Comment, { foreignKey: 'taskId' });
Comment.belongsTo(Task, { foreignKey: 'taskId', onDelete: 'CASCADE' });

Task.belongsToMany(Label, {through: TaskLabel, foreignKey: 'taskId', otherKey:'labelId'} );
Label.belongsToMany(Task, {through: TaskLabel, foreignKey: 'labelId', otherKey:'taskId'});





module.exports = {
    sequelize,
    User,
    Project,
    Task,
    Comment,
    Label,
    ActivityLog,
    FileAttachment,
    Notification,
    TaskLabel,
    TeamMember,
    Team

}
