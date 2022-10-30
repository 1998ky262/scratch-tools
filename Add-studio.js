const url = location.href;
const projectid = url.replace(/[^0-9]/g, '');
function addstudio(studioid){
$.ajax({type:"POST",url:`https://api.scratch.mit.edu/studios/${studioid}/project/${projectid}`});
}
addstudio("56");
