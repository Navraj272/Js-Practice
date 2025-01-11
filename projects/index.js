const body=document.querySelector('body')
const changecolor=document.querySelectorAll('.color')
// console.log(changecolor)

changecolor.forEach((c)=>{
    console.log()
    c.addEventListener('click',function(e){
        // console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey'
        }
        if(e.target.id==='Blue'){
            body.style.backgroundColor='blue'
        }
        if(e.target.id==='color'){
            body.style.backgroundColor='green'
        }
    })
})