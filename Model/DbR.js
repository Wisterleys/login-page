const db = require("./conf/confDbR")
const table = require("../tables/tables")
class DbR{
    constructor(){
            this._db=db;//Só para verficar se a conexão com o DB foi bem sucedida ou não
            this._table=table;
            this.ok()//Confirmação da conexão bem sucedida ou não
            //this.newTable();
    }
    newTable(force=false){//CRIA NOVA TABELA
        this.table.sync({force:force})
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
    async selectAll(obj=false){
        let users=[]
        let res = obj?await this.table.findAll(obj):await this.table.findAll()
        res.forEach(user=>{
            users.push(user.dataValues)
        })
        return users;
    }
    async select(id){
        let res = await this.table.findByPk(id)
        return res.dataValues;
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


/*
Modelo de buscas pelo findAll passando como parametro

{
    attributes:vetor,// aqui passa um vetor com os nomes dos campos que deseja filtrar
    where: {// Aqui faz comparação se a chave login é igual "Wister"
        login:"Wister"
    }
}

pode passar também sepadradamente

{attributes:vetor,// aqui passa um vetor com os nomes dos campos que deseja filtrar}

where: {login:"Wister"}

*/


