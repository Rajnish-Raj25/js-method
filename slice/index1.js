let arr = [2,3,4,5,6,7,8,9]

let res =  arr.slice(3,6)
console.log(res);
 const res2 = res.map((e)=>{
  
    return   e*2
 })
 console.log(res2);

 const res3 = res.reduce((a,b)=>{
    return a+b;
 })
 console.log(res3);

 const res4 = res.filter((e)=>{
    return e%2==0
 })
 console.log(res4);