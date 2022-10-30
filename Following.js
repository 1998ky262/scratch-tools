function follow(username) {
  $.ajax({
    type: "PUT",
    url: "/site-api/users/followers/" + username + "/add/"
  });
}
let x=0;
while(x<100){
follow(1000+x);
  x++;
}
