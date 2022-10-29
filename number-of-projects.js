const url = location.href;
const studioId = url.replace(/[^0-9]/g, '');
async function insaneGuy(){
const a = await fetch(`https://api.scratch.mit.edu/studios/${username}/`);
const b = await a.json();
  console.log(b);
}
insaneGuy();
