const Sequelize = require('sequelize');
const sequelize = new Sequelize('lms', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
    operatorAliases: false,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize)
module.exports = db;