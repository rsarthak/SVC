var e=0;
function reads(){
if(!e){
    document.getElementById("mor").style.display="inline";
    document.getElementById("dot").style.display="none";
document.getElementById("reads").innerHTML="Read Less";
e=1;
}
else{
    document.getElementById("mor").style.display="none";
    document.getElementById("dot").style.display="inline";
document.getElementById("reads").innerHTML="Read More";
e=0;
}
}