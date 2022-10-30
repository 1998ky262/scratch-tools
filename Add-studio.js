function ADDSTUDIO(STUDIOID){
$.ajax({type:"POST",url:`https://api.scratch.mit.edu/studios/${STUDIOID}/project/${PROJECTID}'});
}
ADDSTUDIO("56");
