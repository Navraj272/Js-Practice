function generator(){
    const random='123456789ABCDEF'
    let colors='#'

    for(i=0;i<6;i++){
        colors += random[Math.floor(Math.random()*16)]
    }
    return colors

}
let colchng;
function colorchanger(){
    colchng=setInterval(()=>{
        document.body.style.backgroundColor=generator()
    },2000)
}

function stopchanger(){
    clearInterval(colchng)
    console.log("stopped")
}

const start=document.querySelector('#start').addEventListener('click',colorchanger)
const stop=document.querySelector('#stop').addEventListener('click',stopchanger)

