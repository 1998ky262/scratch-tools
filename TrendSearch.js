let username=prompt("ユーザー名を入力");
let detatext;
let USERNAME;
let DETATEXT;
USERNAME=username.toUpperCase();
async function trendsearch(){
    let a=0;
    while(a<10001){
        deta = await fetch(`https://api.scratch.mit.edu/explore/projects?limit=1&offset=${a}&language=ja&mode=trending&q=*`);
        detatext = await deta.json();
        DETATEXT=detatext[0]["author"]["username"].toUpperCase();
        if(DETATEXT == USERNAME){
            console.log(username+"さんの作品「"+detatext[0]["title"]+"」が傾向"+a+"位に載っています");
        }
        a++;
    }
}
trendsearch();
