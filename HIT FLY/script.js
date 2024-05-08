let mosquito=document.getElementById('mosquito'); 
let totalhits=0;
function startgame(){
    let time=setInterval(()=>{
        var i=Math.floor(Math.random()*900)+1;
        var j=Math.floor(Math.random()*400)+1;
        mosquito.style.left=i+"px";
        mosquito.style.top=j+"px";
        // // console.log(i);
        // console.log(j);
    },1300);
    setTimeout(()=>{
        clearTimeout(time);
    },30000);
}
function restartgame(){
    document.location.reload();
}
function hitMosquito(){
totalhits++;
  document.getElementById("totalhit").innerText=totalhits;
}