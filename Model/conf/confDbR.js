const { Sequelize } = require("sequelize");

const DBR= new Sequelize('users'/*DB*/, 'root'/*username*/, '123'/*password*/, {
    host: 'localhost',/*servername*/
    dialect:'mysql'})

module.exports=DBR;