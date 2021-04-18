const DbR = require("./Model/DbR")
const Express = require("express");
const port = 80;
const db = new DbR();
const app = Express();
async function selectAll(res,req=false){
    if(!req){
        let ress = await db.selectAll()
        res.json(ress)
    }else{
        consol.log(req)
        let ress = await db.selectAll()
        res.json(ress)
    }
}
app.get("/dados",(req,res)=>{
    selectAll(res)
})
app.get("/dados/:campos",(req,res)=>{
    selectAll(res,req.params.campos)
})
app.listen(port,()=>console.log("Rodando na porta "+port))
