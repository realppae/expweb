var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var toread = require('./getBibleToRead.js');

app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');

var myTime = require('./myTime.js');

var connection = mysql.createConnection({
	host:"us-cdbr-iron-east-04.cleardb.net",
	port:3306,
	user:"be622e2985ead7",
	password:"22b85760",
	database:"heroku_0a1cd7aa253f924"
});

connection.connect();

function CalcWorkLog(array) {
	var workingincremented = 0;
	var workingweekdays = 0;
	var prev_weekofyear = -1;
	var worked_h = 0;
	var worked_m = 0;
	var today_h = 0;
	var today_m = 0;
	var towork_h = 0;
	var towork_m = 0;
	var body_str_idx = 0;
	var body_string = new Array();
	var weekstatus_idx = 0;
	var weekstatus_string = new Array();
	var temp = "";

	// 파일 내용을 한 줄씩 읽어서 해석한다
	for ( iii=0 ; iii<array.length ; iii++ ) {

		if(array[iii].length<10)
			continue;

		// string 기준으로 얻는다
		var month = array[iii].substr(0,2);
		var day = array[iii].substr(3,2);
		var begin = array[iii].substr(6,4);
		var end = array[iii].substr(11,4);

		// number 로 변환
		var _month = Number(month);
		var _day = Number(day);
		var _begin_h = Number(begin.substr(0,2));
		var _begin_m = Number(begin.substr(2,2));
		var _end_h = Number(end.substr(0,2));
		var _end_m = Number(end.substr(2,2));

		// total working minutes
		var working = 0;
		if(_end_h - _begin_h > 4)
			working = (_end_h - _begin_h - 1) * 60 + (_end_m - _begin_m);
		else
			working = (_end_h - _begin_h) * 60 + (_end_m - _begin_m);

		// 요일 얻기
		var dayofweek = myTime.getInputDayLabel('2020-'+month+'-'+day);

		// 몇일째인지 얻기
		var dayofyear = myTime.getInputDayOfYear(_month, _day) + 1; // 2020 only!!!

		// 몆주차 (calendar week) 인지 얻기
		var weekofyear = (Math.floor(dayofyear/7) + 1);

		// 주차가 변경되었으면 weekly working time 을 출력한다

		if(prev_weekofyear!=-1 && prev_weekofyear != weekofyear) {
			weekstatus_string[weekstatus_idx] = '<p> ' + (prev_weekofyear) + 'th Working Time : ' +
				worked_h + "." + worked_m
				+ "/" + towork_h + "." + towork_m
				+ '</p>';
			weekstatus_idx++;

			// 일한시간 초기화
			workingincremented = 0;
			workingweekdays = 0;
		}

		// 몇시간 일했는지
		workingincremented += working;

		// 몇일 일했는지 : 최대한 5일까지만 인정함, 주 40시간 이므로
		if(workingweekdays<5)
			workingweekdays++;

		// 이번주에 몇시간 일했는지
		var worked_h = Math.floor(workingincremented/60);
		var worked_m = workingincremented%60;

		// 오늘 몇시간 일했는지
		var today_h = Math.floor(working/60);
		var today_m = working%60;

		// 이번주에 몇시간 일해야 하는지 : 최대 40까지만 계산함
		var towork_h = Math.floor((8*workingweekdays*60)/60);
		var towork_m = (8*workingweekdays*60)%60;

		// 나중에 dump 할 때 역순으로 하기 위해서, 버퍼에만 담아두고 출력은 나중에 한다
		body_string [body_str_idx] = '';

		body_string [body_str_idx] += ('<p>' // + month+day+' '
			+ dayofweek +" / "
			+ weekofyear + "th week : "
			+ array[iii] + ' '
			+ today_h + "." + today_m + " "
			+ worked_h + "." + worked_m + "/" + towork_h + "." + towork_m
			+ "</p>");

		if(prev_weekofyear!=-1 && prev_weekofyear != weekofyear) {
			// 주가 변경되었으므로 밑줄 그어서 분리
			body_string [body_str_idx] += '<p>---------------------</p>';
		}

		body_str_idx++;

		prev_weekofyear = weekofyear;
	}

	if(prev_weekofyear!=-1 && prev_weekofyear == weekofyear) {
		// 가장 최근 즉 이번주 일한 시간을 출력해준다
		weekstatus_string[weekstatus_idx] = '<p> ' + (prev_weekofyear) + 'th Working Time : ' +
			worked_h + "." + worked_m
			+ "/" + towork_h + "." + towork_m
			+ '</p>';
		workingincremented = 0;
		workingweekdays = 0;
		weekstatus_idx++;
	}

	// weekly working time 출력
	temp += '<p>---------------------</p><h3>Weekly Working Time Table</h3><p>---------------------</p>';

	for ( iii=weekstatus_string.length-1 ; iii>=0 ; iii-- ) {
		temp += weekstatus_string[iii];
	}

	// 각 일자별로 working time 계산한것 출력
	temp += '<p>---------------------</p><h3>Daily Working Time Table</h3><p>---------------------</p>';

	for ( iii=body_string.length-1 ; iii>=0 ; iii-- ) {
		temp += body_string[iii];
	}

	// 가장 마지막으로 파일 원본 데이터를 출력
	temp += '<p>---------------------</p><h3>Original Log</h3><p>---------------------</p>';

	// for ( iii=0 ; iii<array.length ; iii++ ) {
	// 	temp += `<p>${array[iii]}</p>`;
	// }

	return temp;
}

app.get('/', function(req, res) {
	console.log('/');

	var bible_to_read = toread.get();

	var body = `
		<!doctype html>
		  <html>
		  <head>
		    <title>Node.js study</title>
		    <meta charset="utf-8">
		  </head>
		  <body>
			<h1>${bible_to_read}</h1>

			<br></br><br></br>
			<a href="/worklog">Create Today's Work Log</a>
			<br></br><br></br>
			<a href="/modifyworklog">Modify Work Log</a>
			<br></br><br></br>


			`;

	//
	connection.query("SELECT * FROM worklog WHERE name='suknam';",
		function(err, result, field) {
			if(err) {
				console.log(err);
			} else {
				var array = new Array();
				for(iii=0;iii<result.length;iii++) {
					array[iii] =
						result[iii].date.substr(4,2) // month
						+ '/'
						+ result[iii].date.substr(6,2) // day
						+ ' '
						+ result[iii].start.substr(0,2) // h
						+ result[iii].start.substr(2,2) // m
						+ '-'
						+ result[iii].end.substr(0,2)
						+ result[iii].end.substr(2,2);
				}

				body += CalcWorkLog(array);

				for(iii=result.length-1;iii>0;iii--) {
					var yyyy = result[iii].date.substr(0,4);
					var mmmm = result[iii].date.substr(4,2);
					var dddd = result[iii].date.substr(6,2);
					var hhhh = result[iii].start.substr(0,2);
					var minu = result[iii].start.substr(2,2);
					var hhhh2 = result[iii].end.substr(0,2);
					var minu2 = result[iii].end.substr(2,2);
					body += `<p>${yyyy}.${mmmm}.${dddd}  ${hhhh}:${minu} - ${hhhh2}:${minu2}</p>`;
				}
				body +=`
						</body>
						</html>`;
				res.send(body);
			}
	});
});

app.get('/pass', function(req, res) {
	console.log('/pass');
	res.send('/pass : ' + req.query.data);
});

app.get('/worklog', function(req, res) {
	console.log('/worklog');
	var curtime = myTime.getSeoulTime();
	var today = curtime.substr(0,8);
	var hm = curtime.substr(8,4);

	var querystr = "SELECT * FROM worklog WHERE date='" + today + "';";
	console.log('query : ' + querystr);

	connection.query(querystr,
		function(err, result, field) {
		if(err) {
			console.log(err);
		} else {
			if(result.length==0) {
				console.log('Zero result found, make new item.');

				querystr = "INSERT INTO worklog (date,start,end,name) VALUES ("
					+ "'" + today + "'"
					+ ",' " + hm + "'"
					+ ",' " + hm + "'"
					+ ",'suknam'"
					+ "');"

				console.log('query : ' + querystr);
				connection.query(querystr);
				res.writeHead(302, {Location: `/`});
				res.end();
			} else {
				console.log('Update existing item with updated time.');

				querystr = "UPDATE worklog SET end='" + hm + "' WHERE (date='" + today + "') AND (name='suknam');"

				console.log('query : ' + querystr);
				connection.query(querystr);
				res.writeHead(302, {Location: `/`});
				res.end();
			}
		}
	});
});

app.post('/user',function(req,res){
	var userID = req.body.id;
	var userPW = req.body.pw;

	if(userID && userPW) {
		connection.query("INSERT INTO user (userID, userPW) VALUES ('"+userID+"','"+userPW+"')",
		function(error,result,fields){
			if(error){
				res.send('err : ' + error);
			} else {
				console.log(userID + ',' + userPW);
				res.send('OK to create user : ' + userID + ' pw : ' + userPW + '!');
			}
		});
	}

	//res.send('id : ' + userID + ' pw : ' + userPW);
});

app.get('/modifyworklog', function(req, res) {
	console.log('/modifyworklog');

	var template = `
	<!doctype html>
		<html>
		<head>
			<title>Node.js study</title>
			<meta charset="utf-8">
		</head>
		<body>
		<h3>2020 only : Please submit the date and working time.</h3>
		<br></br>
		<form action="/process_customworklog" method="post">
		<p><input type="text" name="date" placeholder="yyyy/mm/dd"></p>
		<p>
			<textarea name="logcontents" placeholder="0900-1800">0900-1800</textarea>
		</p>
		<p>
			<input type="submit">
		</p>
	</form>
	`
	;
	res.writeHead(200);
	res.end(template);
});

app.post('/process_customworklog',function(req,res){
	var date = req.body.date;
	var contents = req.body.logcontents;
	var hm1 = contents.substr(0,4);
	var hm2 = contents.substr(5,4);

	console.log(date + ', ' + contents);

	var querystr = "SELECT * FROM worklog WHERE date='" + date + "';";
	console.log('query : ' + querystr);

	connection.query(querystr,
		function(err, result, field) {
		if(err) {
			console.log(err);
		} else {
			if(result.length==0) {
				console.log('Zero result found, make new item.');

				querystr = "INSERT INTO worklog (date,start,end,name) VALUES ("
					+ "'" + today + "'"
					+ ",' " + hm1 + "'"
					+ ",' " + hm2 + "'"
					+ ",'suknam'"
					+ "');"

				console.log('query : ' + querystr);
				connection.query(querystr);
				res.writeHead(302, {Location: `/`});
				res.end();
			} else {
				console.log('Update existing item with updated time.');

				var start = result[0].start;
				var end = result[0].end;
				//var _today = today.substr(0,4) + today.substr(5,2) + today.substr(8,2);

				querystr =
					"UPDATE worklog SET start='"
					+ hm1 + "', end='" + hm2
					+ "' WHERE (date='" + date + "') AND (name='suknam');"

				console.log('query : ' + querystr);
				connection.query(querystr);
				res.writeHead(302, {Location: `/`});
				res.end();
			}
		}
	});
});

var port = process.env.PORT || 5000;
app.listen(port,function(){
	console.log('start server');
});
