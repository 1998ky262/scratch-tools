const a = getParam("v");
// youtubeの動画idを取得
const move =document.querySelector('html');
move.remove();
// htmlを消します()
let wannahtml = document.createElement('html');
// html要素を作成
wannahtml.textContent = `<body><iframe width="560" height="315" src="https://www.youtube.com/embed/${a}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body>`;
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
