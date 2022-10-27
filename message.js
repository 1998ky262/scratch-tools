async function insaneGuy(){
const a = await fetch("https://api.scratch.mit.edu/users/nekopyon/messages/count");
const b = await a.json();
console.log(b);
}
insaneGuy();
