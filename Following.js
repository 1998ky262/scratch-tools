function follow(username){
$.ajax({type:"PUT",url:`/site-api/users/followers/${username}/add/`});
}
follow("-polygon");
