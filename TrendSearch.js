const username=prompt("ユーザー名を入力");
async function trendsearch(th){
const deta =await fetch(`https://api.scratch.mit.edu/explore/projects?limit=1&offset=${th}&language=ja&mode=trending&q=*`);
let detatext=await deta.json();
detatext=detatext[0]["title"];
 console.log(detatext);
}
let a=0;
while(a<1001){
  trendsearch(a);
  a++;
}


