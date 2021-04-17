const { Sequelize } = require("sequelize");
class DbR{
    constructor(conf){
        console.log(conf)
        this._db= new Sequelize(conf)
        //this.ok()
    }
    async ok(){
        try {
            await this.db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
    //SETs and GETs
    get db(){
        return this._db;
    }
}

module.exports=DbR;