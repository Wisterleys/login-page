const DbR = require("./Model/DbR")
const Express = require("express");
const path = require("path")
const port = 80;
const db = new DbR();
const app = Express();

app.use(Express.static(path.join(__dirname+"/html")))
async function selectAll(res,req=false){
    if(!req){
        let ress = await db.selectAll()
        res.json(ress)
    }else{
        let ress = await db.selectAll({where:{login:req}})
        res.json(ress)
    }
}
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html")
})
app.get("/search",(req,res)=>{
    selectAll(res)
})
app.get("/search/:login",(req,res)=>{
    selectAll(res,req.params.login)
})
app.listen(port,()=>console.log("Rodando na porta "+port))
