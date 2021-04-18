const db = require("./conf/confDbR")
const table = require("../tables/tables")
class DbR{
    constructor(){
            this._db=db;//Só para verficar se a conexão com o DB foi bem sucedida ou não
            this._table=table;
            this.ok()//Confirmação da conexão bem sucedida ou não
            //this.newTable()
    }
    newTable(){//CRIA NOVA TABELA
        this.table.sync({force:true})
    }
    // CRUD

    //  C
   async insertinto(values){
       let res = await this.table.create({
            login: values.login,
            password:values.password
        })
    }
    // R
    async selectAll(){
        let res = await this.table.findAll()
        return res;
    }
    // IMP
    impAll(){
        this.selectAll()
        .then(res=>{
            res.forEach(user=>{
                    console.log(user.dataValues)
            })
        })
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
    get table(){
        return this._table;
    }
    get db(){
        return this._db;
    }
    
}

module.exports=DbR;