function follow(username) {
  $.ajax({
    type: "PUT",
    url: "/site-api/users/followers/" + username + "/add/"
  });
}
let x=0;
while(x<900){
setTimeout(follow(100+x),30000);
  x++;
}
