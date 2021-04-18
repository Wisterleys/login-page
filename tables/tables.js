const { Sequelize } = require("sequelize");
const db = require("../Model/conf/confDbR");

const data=db.define("cadastros",{//Modelo de tabela a ser criada e consultada no bando de dados
        login:Sequelize.STRING,
        password:Sequelize.STRING
})
module.exports=data;