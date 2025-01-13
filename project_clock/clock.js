const time=document.querySelector('#time')

setInterval(()=>{
    let currtime=new Date();
    time.innerHTML=currtime.toLocaleTimeString();
},1000)