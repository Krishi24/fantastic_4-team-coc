const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function UpdateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
   if(h<10){h="0"+h};
   if(m<10){m="0"+m};
   if(s<10){s="0"+s};

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{
        UpdateClock();
    },1000);
}
UpdateClock();
