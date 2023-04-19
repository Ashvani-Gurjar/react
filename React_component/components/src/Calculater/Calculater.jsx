
const add = (a,b)=>{
     return a+b;
}
const sub = (a,b)=>{
     return a-b;
}
const mult = (a,b)=>{
     return a*b;
}
function div(a,b){
     let c = a/b;
      c = c.toFixed(2);
     return c;
}

export {add,sub,mult,div};