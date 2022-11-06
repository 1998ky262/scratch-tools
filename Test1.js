fetch("https://scratch.mit.edu/session/",
{"headers":{"x-requested-with": "XMLHttpRequest"}}).then(response=>response.text()).then(data=>console.log(data));
async funtion addstudio(STUDIOID){
await fetch(`https://api.scratch.mit.edu/studios/${STUDIOID}/project/${PROJECTID}`
 {method:"POST" ,
    headers:{
            "x-token":data}
              );
}
const PROJECTID=prompt("プロジェクトのIDを入力");
addstudio(56);
 
