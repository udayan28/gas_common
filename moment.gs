// 時間関連の処理
// - ライブラリでMoment.jsを読み込む必要あり

// 日付を指定するとその期間の日付のリストを返す
function getDayList (startDay, endDay){
  
  var dayList = [];
  
  var startDayM = Moment.moment(startDay);
  var endDayM = Moment.moment(endDay); 
  var period = endDayM.diff(startDayM, 'd');
  
  for (var i = 0; i <= period; i++ ){
    var startDayM = Moment.moment(startDay);
    var day = startDayM.add(i, 'd');
    dayList.push(day);
  }
  
  return dayList;
};

// 日付を渡すと先月の日付のリストを返す
function getLastMonthDayList (day){
  
  dayList = [];

  var dayM = Moment.moment(day);
  var lastMonthFirstDayM = dayM.subtract(1, 'month').startOf('month');
  var lastMonthFisrtDay = lastMonthFirstDayM.toString();
  
  var lastMonthDaysM = lastMonthFirstDayM.daysInMonth();
  
  
  for (var i = 0; i < lastMonthDaysM; i++){
    var dayM = Moment.moment(lastMonthFisrtDay); 
    
    var day = dayM.add(i, 'd');
    dayList.push(day);
  }
  
  return dayList;
};



// 日付と数値を渡すと数値営業日前の日付を返す
function getXBusinessdayBefore(day, x) {
  // 日本の祝日読み込み
  var jpCal = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');
  var extraDay = 0;
     
  for (var i = 0; i <= x; i++){
    var mDay = Moment.moment(day);
    var tmpDay = mDay.add(i, 'days');
    
    if ( jpCal.getEventsForDay(tmpDay.toDate()).length != 0　|| tmpDay.weekday() === 0 || tmpDay.weekday() === 6 ){
      extraDay += 1;
    }; 
  };
  
  var mDay = Moment.moment(day);
  var sbtDay = mDay.add(x + extraDay, 'days');
  
  Logger.log(sbtDay.toString());
  
  while (jpCal.getEventsForDay(sbtDay.toDate()).length != 0　|| sbtDay.weekday() === 0 || sbtDay.weekday() === 6){
    sbtDay.add(1, 'days');
  }
  
  return sbtDay.format('YYYY/MM/DD');
};