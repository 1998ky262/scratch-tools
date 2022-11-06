async function trendsearch(th){
const deta =await fetch(`https://api.scratch.mit.edu/explore/projects?limit=1&offset=${th}&language=ja&mode=trending&q=*`);
let detatext=await deta.json();
let detatext=detatext["title"];
 console.log(detatext);
}
let a=0;
while(a<1001){
  trendsearch(a);
  a++;
}


