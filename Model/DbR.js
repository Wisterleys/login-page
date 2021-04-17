const { Sequelize } = require("sequelize");
class DbR{
    constructor(){
        this._db= new Sequelize('users', 'root', '123', {
            host: 'localhost',
            dialect:'mysql'})
        this.ok()
    }
    async ok(){
        try {
            await this.db.authenticate();
            console.log('Banco de dados conectado com sucesso!.');
          } catch (error) {
            console.error('Erro na conexão ao DB:', error);
          }
    }
    //SETs and GETs
    get db(){
        return this._db;
    }
}

module.exports=DbR;