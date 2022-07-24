// Global Imports
const mongoose = require('mongoose');
const chalk = require('chalk');

// Local Imports
const { DB_CREDENTIALS } = require('../config/env');

exports.connectDB = async () => {
    try {
        const url = `${DB_CREDENTIALS.DB_URL}/${DB_CREDENTIALS.DB_NAME}`
        const conn = await mongoose.connect(url);
        console.log(chalk.blueBright(`Database connected on ${conn.connection.host}`));
    } catch (error) {
        console.log(chalk.yellowBright('Database not connected!'));
        console.log(chalk.redBright(error));
    }
}