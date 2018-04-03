let button=document.querySelector("#enter");
let ul=document.querySelector("ul");
let item=document.querySelector("#items");
button.addEventListener("click",function(){
        let exist=false;
        let items=document.querySelectorAll("li");
        let item=document.querySelector("#items");
        let val=item.value;
        items.forEach((it)=>{if(it.innerText==val){exist=true;}});
        if(exist==false){
        let node=document.createElement("li");
        textnode=document.createTextNode(val);
        node.appendChild(textnode);
        ul.appendChild(node);
    }else{
        alert("exists");
    }
 })

