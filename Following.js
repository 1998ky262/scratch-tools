function follow(username) {
  $.ajax({
    type: "PUT",
    url: "/site-api/users/followers/" + username + "/add/"
  });
}
let x=0;
while(x<100){
follow("kaito"+x);
  x++;
}
