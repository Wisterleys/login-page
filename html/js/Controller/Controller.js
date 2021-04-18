class Controler{
    constructor(){
        this.btn=false
        this.initial();
    }
    prints(name){
        $("#info").innerHTML+=`| O campo ${name} não foi preenchido`
        this.btn=true;
    }
    print(vet){
        vet.forEach(field=>{
            field.ok?$(".check")[field.index].style.background="green":$(".check")[field.index].style.background="red"
            !field.ok&&!this.btn?this.prints(field.name):0
            field.ok?$("button")[0].disabled=true:$("button")[0].disabled=false
        })
        
    }
    checks(){
        let v=[]
        $("button")[0].disabled=true
        $(".check").forEach((e,i)=> {
            e.value?v.push({name:e.name,ok:true,index:i}):v.push({name:e.name,ok:false,index:i})
        });
        return v;
    }
    initial(){
        $("#button").on("click",e=>{
           this.print(this.checks())
        })
    }
}