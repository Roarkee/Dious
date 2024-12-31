require('dotenv').config({path: '../.env'})
const app = require('./app.js');
const {authenticateDB } = require('./config/db');
const {sequelize} = require('./models');

const PORT = process.env.PORT;

// (async ()=>{
//     try{
//         await sequelize.sync({alter: true});
//     } catch(error){
//         console.error('how do you code', error);

//     }
// })()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// process.on('SIGINT', async () => {
//     console.log('Shutting down server...');
//     await sequelize.close();
//     process.exit(0);
// });




