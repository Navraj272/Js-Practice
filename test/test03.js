const numarr=[1,2,3,4,5,6,7]

const arr=[]
numarr.forEach((num)=>arr.push(num+10)
)

// console.log(arr)


const mynums=[1,2,3]
const inival=0
const val = mynums.reduce((accum,currval)=>{
    return accum+currval 
},inival)

console.log(val)