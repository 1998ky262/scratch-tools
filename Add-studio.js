const url = location.href;
const PROJECTID = url.replace(/[^0-9]/g, '');
function ADDSTUDIO(STUDIOID){
$.ajax({type:"POST",url:`https://api.scratch.mit.edu/studios/${STUDIOID}/project/${PROJECTID}'});
}
ADDSTUDIO("56");
