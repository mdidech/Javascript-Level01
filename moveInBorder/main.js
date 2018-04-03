
const titre=document.querySelector("h1");
const cadre=document.querySelector("div");
const maxHeight=cadre.clientHeight;
const maxwidth=cadre.clientWidth;
titre.style.position="relative";
let topPos=0;
let leftPos=0;
let forceH=-2;
let forceW=-2;
function animation(){
    if (topPos==0){forceH *=-1}
    else if(topPos==maxHeight-titre.offsetHeight){forceH *=-1}
    topPos+=forceH;
    titre.style.top=topPos + "px";
    // requestAnimationFrame(animation);
    if(leftPos==0){forceW *=-1}
    else if(leftPos==maxwidth-titre.offsetWidth){forceW *=-1}
    leftPos+=forceW;
    titre.style.left=leftPos + "px";
    requestAnimationFrame(animation);
}
requestAnimationFrame(animation);