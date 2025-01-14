const promise1=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        const error=false;
        if(!error){
            resolved({username:"navraj",id:"540422220907"})
        }
        else(
            reject("Error:recieved an error")
        )
    },1000)
})

// promise1.then((object)=>{
//     console.log(object)
// })

// promise1.catch((err)=>{
//     console.log(err);
// })

async function consumer() {
   try{
        const res=await promise1
        console.log(res) 
   }
   catch(err){
        console.log(err)
   }
}
consumer()


async function responsive(){
    try{
        const res=await fetch("https://randomuser.me/api/?results=5")
        const data=await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
responsive()


// fetch("https://randomuser.me/api/?results=5")
// .then(
//     (res)=>{
//         return res.json()
//     }
// )
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>(
//     console.log(err)
// ))