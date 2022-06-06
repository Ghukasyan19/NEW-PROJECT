const express = require('express');
const sequelize = require('./db/connection');
const config = require('./configs/config');



const app = express();
const PORT = config.PORT;

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
        await sequelize.authenticate();
        console.log('Database successfully connected!');
    }catch (error){
        console.log('Unable to connect to the database ', error.message);
    }

};

start();
