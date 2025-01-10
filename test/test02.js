const obj1={
    name:"navraj",
    age:21,
    dob:"sept"
}

const arr=[
    {
        name:"navraj",
        age:21,
        dob:"sept"
    },
    {
        name:"nav",
        age:22,
        dob:"sep"
    }
]
const arr1=["nsb","nsbb","nsbbb"]
// for (const i in obj1){
//     console.log(obj1[i]);
// }
arr.forEach((i)=>{
    console.log(`The name is${i.name} , the age is ${i.age}`)
})

