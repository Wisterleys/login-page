const { Sequelize } = require("sequelize");
const table = require("../tables/tables")
class DbR{
    constructor(){
        this._db= new Sequelize('users'/*DB*/, 'root'/*username*/, '123'/*password*/, {
            host: 'localhost',/*servername*/
            dialect:'mysql'})
            this.ok()//Confirmação da conexão bem sucedida ou não
    }
    newTable(){//CRIA NOVA TABELA
       let user = this.db.define("cadastros",table)
       user.sync()
    }
   async inserinto(values){
        //this.db
    }
    //Método para confirmação de conexão
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