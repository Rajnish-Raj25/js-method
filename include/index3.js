let a= [1, 2, 3].includes(2)         
 let b=[1, 2, 3].includes(4)         
 let c= [1, 2, 3].includes(3, 3)      
 let d =[1, 2, 3].includes(3, -1)     
 let e =[1, 2, NaN].includes(NaN)     
let f = ["1", "2", "3"].includes(3)   

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);