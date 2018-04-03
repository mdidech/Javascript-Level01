let title=document.querySelector("#text");
let menu=document.querySelector("#menu");
let btn=document.querySelector("#btn");
let items=menu.querySelectorAll("li");

    
items.forEach((item)=>{

    item.addEventListener("click",function (){

        title.innerHTML=item.innerHTML;
        items.forEach((it)=>{it.classList.remove('selected');})
        item.classList.add('selected');
    })
    
})


btn.addEventListener("click",function(){
    let input=document.querySelector("#txt");
    if(!input.value==""){
        menu.innerHTML+=`<li>${input.value}</li>`;
        let items=menu.querySelectorAll("li");
    
        items.forEach((item)=>{
        
            item.addEventListener("click",function (){
        
                title.innerHTML=item.innerHTML;
                items.forEach((it)=>{it.classList.remove('selected');})
                item.classList.add('selected');
            })
            
        })
    }else{
        alert("Invalid:entrez du Texte");
    }
   
    
}

)
