import { Sequelize } from "sequelize";

import options from '../../sequelize'

const db = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    dialect: 'mysql'
})

export default db;