funtion trendsearch(th){
const deta =await fetch(`https://api.scratch.mit.edu/explore/projects?limit=1&offset=${th}&language=ja&mode=trending&q=*`);
const detatext=await deta.json();
 console.log(detatext);
}
let a=0;
while(a==1000){
  trendsearch(a);
  a++;
}


