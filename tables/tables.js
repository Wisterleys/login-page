const { Sequelize } = require("sequelize");
const db = require("../Model/conf/confDbR");

const data=db.define("cadastros",{//Modelo de tabela a ser criada e consultada no bando de dados
        nome:Sequelize.STRING,
        senha:Sequelize.STRING
})
module.exports=data;