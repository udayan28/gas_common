// スプレッドシートのIO関連

// シートIDとシート名からシートオブジェクトを返す
function getSheet(spreadSheetId, sheetName) {
  var spreadsheet = SpreadsheetApp.openById(spreadSheetId);
  getSheet.sheet = spreadsheet.getSheetByName(sheetName);
  return getSheet.sheet;
}


// シートオブジェクトと行番号を渡すとその行までの多次元配列を返す
// - オプションで行を2つ渡した場合は指定行から+x行の多次元配列を返す
function getRecord (sheet, row, args) {
  var record = [];
  
  if (arguments.length == 2){
    record = sheet.getRange(2, 2, row, sheet.getMaxColumns()).getValues();  
  } else{
    record = sheet.getRange(row, 2, arguments[2], sheet.getMaxColumns()).getValues();
  };
  
  return record
}


// 列番号を受け取るとを配列にして返す
// オプションで行番号を渡すと指定行までの配列となる
function getColValList(sheet, colNum, args) {
  var colvalList = [];
  if (arguments.length === 2){
    var twoDimArray = sheet.getRange(2, colNum, sheet.getLastRow()).getValues();  
  
  } else{
    var twoDimArray = sheet.getRange(2, colNum, arguments[2]).getValues(); 
  }
  
  twoDimArray.forEach(function(array){
    colvalList.push(array[0])
  });
  return colvalList;
};


// シートオブジェクトと行番号を渡すと行の配列を返す
function getRowValue(sheet, row){
  targetRow = row + ':' + row;
  return sheet.getRange(targetRow).getValues()[0];
};


// シート情報、セル{row, col}、値を渡すと指定セルに書き込む
function setValue(sheet, row, col, value){
  sheet.getRange(row, col).setValue(value);
};
