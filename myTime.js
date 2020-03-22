var moment = require('moment');

var myTime = {
  // 서울 기준 시간을 얻는다!!!
  getSeoulTime : function()
  {
  	require('moment-timezone');
  	moment.tz.setDefault("Asia/Seoul");
  	var _yyyy = moment().format('YYYY');
  	var _day = moment().format('DD');
  	var _month = moment().format('MM');
  	var _h = moment().format('HH');
  	var _m = moment().format('mm');

  	return _yyyy+_month+_day+_h+_m; // e.g. 202003151829
  },

  // 2020년 기준으로 1월 1일부터 해서 몇일째인지를 얻는다
  getInputDayOfYear : function (month, day) // 2020 only!!!
  {
  	var date = 0;

  	if(month>1) date += 31;
  	if(month>2) date += 29;
  	if(month>3) date += 31;
  	if(month>4) date += 30;
  	if(month>5) date += 31;
  	if(month>6) date += 30;
  	if(month>7) date += 31;
  	if(month>8) date += 31;
  	if(month>9) date += 30;
  	if(month>10) date += 31;
  	if(month>11) date += 30;
  	//if(month>12) date += 30;

  	date += day;

  	return date;
  },

  // 주어진 날짜를 기준으로 요일을 얻는다
  getInputDayLabel : function (givendate) {

  		//console.log(givendate);
      var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

      var today = new Date(givendate).getDay();
      var todayLabel = week[today];

      return todayLabel;
  }
}

module.exports = myTime;
