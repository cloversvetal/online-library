import {Sequelize} from 'sequelize-typescript';
import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const sequelizeConfig = new Sequelize({
    database: process.env.DB_NAME || 'online_library',
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: '12345678',
    port: parseInt(process.env.DB_PORT || '5432'),
    models: ['../models'],
    logging: false, // set to console.log to see the raw SQL queries
    define: {
        timestamps: true  // adds createdAt and updatedAt timestamps to every model
    },
});

export default sequelizeConfig;