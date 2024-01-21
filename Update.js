//アップデート知らせるコメントができるJavaScriptコードです。
function updateBulletinBoard() {
  var textarea = document.getElementsByName("content")[0];
  var currentTime = new Date();
  var formattedDateTime = formatDateTime(currentTime);

  // 更新メッセージを生成
  var updateMessage = "【更新】掲示板を更新しました。" + formattedDateTime;

  // テキストエリアに追加
  textarea.value = updateMessage + "\n" + textarea.value;
}

function formatDateTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // 月は0から始まるため+1する
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // ゼロ埋め
  month = (month < 10) ? "0" + month : month;
  day = (day < 10) ? "0" + day : day;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;

  return year + "/" + month + "/" + day + " " + hours + ":" + minutes;
}

updateBulletinBoard();
//completion(result);
//↑iphone及びipadのショートカットで使う場合は、"//"を消してね！
