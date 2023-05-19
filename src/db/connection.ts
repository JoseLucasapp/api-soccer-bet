import { Sequelize } from 'sequelize-typescript';

import options from '../../sequelize'
import { Bet } from "../entities/bet";

const db = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    dialect: 'mysql'
})
//db.addModels([Bet])
export default db;