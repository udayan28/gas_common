// テキスト処理まとめ

// テキストを受け取ると改行・スペース無しのテキストを返す
function planeTextConverter(text){
  
  var removeLineBreak = text.split("\n")[0];
  var planeText = removeLineBreak.split(" ").join("");
  
  return planeText;
};