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
        if($("button")[0].disabled){
            this.ajax($("#login").value)
        }
    }
    checks(){
        let v=[]
        $("button")[0].disabled=true
        $(".check").forEach((e,i)=> {
            e.value?v.push({name:e.name,ok:true,index:i}):v.push({name:e.name,ok:false,index:i})
        });
        return v;
    }
    ajax(f){
        let ajax = new XMLHttpRequest()
        ajax.open("GET","http://localhost/search/"+f);
        ajax.send();

        ajax.onload=e=>{
            let obj = JSON.parse(ajax.responseText)[0]?JSON.parse(ajax.responseText):false
            if(obj){
                $("#info").innerHTML="Logado!"
            }
            else{
                $("#info").innerHTML="Login não existe";
                $("button")[0].disabled=false
                $(".check").forEach(e=>{
                    e.style.background="red"
                })
            }
        }
    }
    initial(){
        $("#button").on("click",e=>{
           this.print(this.checks())
        })
    }
}