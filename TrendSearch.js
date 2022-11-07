const username=prompt("ユーザー名を入力");
let detatext;
async function trendsearch(){
    let a=0;
    while(a<10001){
        let deta = await fetch(`https://api.scratch.mit.edu/explore/projects?limit=1&offset=${a}&language=ja&mode=trending&q=*`);
        detatext = await deta.json();
        if(detatext[0]["author"]["username"] === username){
            console.log(username+"さんの作品「"+detatext[0]["title"]+"」が傾向"+a+"位に載っています");
        }
        a++;
    }
}
trendsearch();
