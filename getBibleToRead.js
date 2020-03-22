var myTime = require('./myTime.js');

var toread = {
  // 읽어야 할 성경 위치를 얻는다
  get : function()
  {
  	var seoultime = myTime.getSeoulTime();
  	_yyyy = seoultime.substr(0,4);
  	_month = seoultime.substr(4,2);
  	_day = seoultime.substr(6,2);

  	// string
  	var day = Number(_day);
  	var month = Number(_month);
  	var yyyy = Number(_yyyy);

  	today = yyyy+'/' + _month+'/'+_day;

  	var toread = '';

  	if(yyyy!=2020) toread += '???';
  	else {
  		if(month==3)
  		{
  			if(day===8) toread = "신28, 마13-14";
  			if(day===9) toread = "신29, 마15-16";
  			if(day===10) toread = "신30, 마17-18";
  			if(day===11) toread = "신31, 마19-20";
  			if(day===12) toread = "신32, 마21-22";
  			if(day===13) toread = "신33, 마23-24";
  			if(day===14) toread = "신34, 마25-26";
  			if(day===15) toread = "수1, 마27-28";
  			if(day===16) toread = "수2, 요1-2";
  			if(day===17) toread = "수3, 요3-4";
  			if(day===18) toread = "수4, 요5-6";
  			if(day===19) toread = "수5, 요7-8";
  			if(day===20) toread = "수6, 요9-10";
  			if(day===21) toread = "수7, 요11-12";
  			if(day===22) toread = "수8, 요13-14";
  			if(day===23) toread = "수9, 요15-16";
  			if(day===24) toread = "수10, 요17-18";
  			if(day===25) toread = "수11, 요19-21";
  			if(day===26) toread = "수12, 행1-2";
  			if(day===27) toread = "수13, 행3-5";
  			if(day===28) toread = "수14, 행6-7";
  			if(day===29) toread = "수15, 행8-10";
  			if(day===30) toread = "수16, 행11-12";
  			if(day===31) toread = "수17, 행13-14";
  		}
  		else if(month===4)
  		{
  			if(day===1) toread = "수18, 행15-16";
  			if(day===2) toread = "수19, 행17-18";
  			if(day===3) toread = "수20, 행19-20";
  			if(day===4) toread = "수21, 행21-22";
  			if(day===5) toread = "수22, 행23-24";
  			if(day===6) toread = "수23, 행25-26";
  			if(day===7) toread = "수24, 행27-28";
  			if(day===8) toread = "삿1, 창1-2";
  			if(day===9) toread = "삿2, 창3-4";
  			if(day===10) toread = "삿3, 창5-6";
  			if(day===11) toread = "삿4, 창7-8";
  			if(day===12) toread = "삿5, 창9-10";
  			if(day===13) toread = "삿6, 창11-12";
  			if(day===14) toread = "삿7, 창13-14";
  			if(day===15) toread = "삿8, 창15-16";
  			if(day===16) toread = "삿9, 창17-18";
  			if(day===17) toread = "삿10, 창19-20";
  			if(day===18) toread = "삿11, 창21-22";
  			if(day===19) toread = "삿12, 창23-24";
  			if(day===20) toread = "삿13, 창25-26";
  			if(day===21) toread = "삿14, 창27-28";
  			if(day===22) toread = "삿15, 창29-30";
  			if(day===23) toread = "삿16, 창31-32";
  			if(day===24) toread = "삿17, 창33-34";
  			if(day===25) toread = "삿18, 창35-36";
  			if(day===26) toread = "삿19, 창37-38";
  			if(day===27) toread = "삿20, 창39-40";
  			if(day===28) toread = "삿21, 창41-42";
  			if(day===29) toread = "룻1, 창43-44";
  			if(day===30) toread = "룻2, 창45-46";
  		}
  		else if(month==5) {
  			if(day===1) toread = "룻3, 창47-48";
  			if(day===2) toread = "룻4, 창49-50";
  			if(day===3) toread = "삼상1, 시43-45";
  			if(day===4) toread = "삼상2, 시46-48";
  			if(day===5) toread = "삼상3, 시49-51";
  			if(day===6) toread = "삼상4, 시52-54";
  			if(day===7) toread = "삼상5, 시55-57";
  			if(day===8) toread = "삼상6, 시58-60";
  			if(day===9) toread = "삼상7, 시61-63";
  			if(day===10) toread = "삼상8, 시64-66";
  			if(day===11) toread = "삼상9, 시67-69";
  			if(day===12) toread = "삼상10, 시70-72";
  			if(day===13) toread = "삼상11, 시73-75";
  			if(day===14) toread = "삼상12, 시76-78";
  			if(day===15) toread = "삼상13, 시79-81";
  			if(day===16) toread = "삼상14, 시82-84";
  			if(day===17) toread = "삼상15, 시85-87";
  			if(day===18) toread = "삼상16, 시88-90";
  			if(day===19) toread = "삼상17, 시91-93";
  			if(day===20) toread = "삼상18, 시94-96";
  			if(day===21) toread = "삼상19, 시97-99";
  			if(day===22) toread = "삼상20, 시100-102";
  			if(day===23) toread = "삼상21, 시103-105";
  			if(day===24) toread = "삼상22, 시106-108";
  			if(day===25) toread = "삼상23, 시109-111";
  			if(day===26) toread = "삼상24, 시112-114";
  			if(day===27) toread = "삼상25, 시115-116";
  			if(day===28) toread = "삼상26, 시117-118";
  			if(day===29) toread = "삼상27, 시119(1-48)";
  			if(day===30) toread = "삼상28, 시119(49-96)";
  			if(day===31) toread = "삼상29, 시119(97-144)";
  		}
  		else if(month===6) {
  			if(day===1) toread = "삼상30, 시119(145-176)";
  			if(day===2) toread = "삼상31, 시120-121";
  			if(day===3) toread = "삼하1, 시122-124";
  			if(day===4) toread = "삼하2, 시125-126";
  			if(day===5) toread = "삼하3, 시127-128";
  			if(day===6) toread = "삼하4, 시129-131";
  			if(day===7) toread = "삼하5, 시132-133";
  			if(day===8) toread = "삼하6, 시134-136";
  			if(day===9) toread = "삼하7, 시137-138";
  			if(day===10) toread = "삼하8, 시139-141";
  			if(day===11) toread = "삼하9, 시142-143";
  			if(day===12) toread = "삼하10, 시144-145";
  			if(day===13) toread = "삼하11, 시146-147";
  			if(day===14) toread = "삼하12, 시148-150";
  			if(day===15) toread = "삼하13, 잠1-2";
  			if(day===16) toread = "삼하14, 잠3-4";
  			if(day===17) toread = "삼하15, 잠5-6";
  			if(day===18) toread = "삼하16, 잠7-8";
  			if(day===19) toread = "삼하17, 잠9-10";
  			if(day===20) toread = "삼하18, 잠11-12";
  			if(day===21) toread = "삼하19, 잠13-14";
  			if(day===22) toread = "삼하20, 잠15-16";
  			if(day===23) toread = "삼하21, 잠17-18";
  			if(day===24) toread = "삼하22, 잠19-20";
  			if(day===25) toread = "삼하23, 잠21-22";
  			if(day===26) toread = "삼하24, 잠23-24";
  			if(day===27) toread = "왕상1, 잠25-26";
  			if(day===28) toread = "왕상2, 잠27-28";
  			if(day===29) toread = "왕상3, 잠29-31";
  			if(day===30) toread = "왕상4, 전1-3";
  		}
  		else if(month==7) {
  			if(day===1) toread = "왕상5, 전4-7";
  			if(day===2) toread = "왕상6, 전8-10";
  			if(day===3) toread = "왕상7, 전11-12";
  			if(day===4) toread = "왕상8, 아1-3";
  			if(day===5) toread = "왕상9, 아4-6";
  			if(day===6) toread = "왕상10, 아7-8";
  			if(day===7) toread = "왕상11, 출1-2";
  			if(day===8) toread = "왕상12, 출3-4";
  			if(day===9) toread = "왕상13, 출5-6";
  			if(day===10) toread = "왕상14, 출7-8";
  			if(day===11) toread = "왕상15, 출9-11";
  			if(day===12) toread = "왕상16, 출12-13";
  			if(day===13) toread = "왕상17, 출14-15";
  			if(day===14) toread = "왕상18, 출16-17";
  			if(day===15) toread = "왕상19, 출18-19";
  			if(day===16) toread = "왕상20, 출20-21";
  			if(day===17) toread = "왕상21, 출22-23";
  			if(day===18) toread = "왕상22, 출24-26";
  			if(day===19) toread = "왕하1, 출27-28";
  			if(day===20) toread = "왕하2, 출29-30";
  			if(day===21) toread = "왕하3, 출31-32";
  			if(day===22) toread = "왕하4, 출33-34";
  			if(day===23) toread = "왕하5, 출35-36";
  			if(day===24) toread = "왕하6, 출37-38";
  			if(day===25) toread = "왕하7, 출39-40";
  			if(day===26) toread = "왕하8, 레1-2";
  			if(day===27) toread = "왕하9, 레3-4";
  			if(day===28) toread = "왕하10, 레5-6";
  			if(day===29) toread = "왕하11, 레7-8";
  			if(day===30) toread = "왕하12, 레9-10";
  			if(day===31) toread = "왕하13, 레11-12";
  		}
  		else if(month===8) {
  			if(day===1) toread = "왕하14, 레13-15";
  			if(day===2) toread = "왕하15, 레16-17";
  			if(day===3) toread = "왕하16, 레18-19";
  			if(day===4) toread = "왕하17, 레20-21";
  			if(day===5) toread = "왕하18, 레22-23";
  			if(day===6) toread = "왕하19, 레24-25";
  			if(day===7) toread = "왕하20, 레26-27";
  			if(day===8) toread = "왕하21, 시1-3";
  			if(day===9) toread = "왕하22, 시4-6";
  			if(day===10) toread = "왕하23, 시7-9";
  			if(day===11) toread = "왕하24, 사1-2";
  			if(day===12) toread = "왕하25, 사3-4";
  			if(day===13) toread = "대상1, 사5-6";
  			if(day===14) toread = "대상2, 사7-8";
  			if(day===15) toread = "대상3, 사9-10";
  			if(day===16) toread = "대상4, 사11-12";
  			if(day===17) toread = "대상5, 사13-14";
  			if(day===18) toread = "대상6, 사15-16";
  			if(day===19) toread = "대상7, 사17-18";
  			if(day===20) toread = "대상8, 사19-20";
  			if(day===21) toread = "대상9, 사21-23";
  			if(day===22) toread = "대상10, 사24-25";
  			if(day===23) toread = "대상11, 사26-27";
  			if(day===24) toread = "대상12, 사28-29";
  			if(day===25) toread = "대상13, 사30-31";
  			if(day===26) toread = "대상14, 사32-33";
  			if(day===27) toread = "대상15, 사34-35";
  			if(day===28) toread = "대상16, 사36-37";
  			if(day===29) toread = "대상17, 사38-39";
  			if(day===30) toread = "대상18, 사40-41";
  			if(day===31) toread = "대상19, 사42-43";
  		}
  		else if(month===9) {
  			if(day===1) toread = "대상20, 사44-45";
  			if(day===2) toread = "대상21, 사46-48";
  			if(day===3) toread = "대상22, 사49-50";
  			if(day===4) toread = "대상23, 사51-52";
  			if(day===5) toread = "대상24, 사53-54";
  			if(day===6) toread = "대상25, 사55-56";
  			if(day===7) toread = "대상26, 사57-58";
  			if(day===8) toread = "대상27, 사59-60";
  			if(day===9) toread = "대상28, 사61-62";
  			if(day===10) toread = "대상29, 사63-64";
  			if(day===11) toread = "대하1, 사65-66";
  			if(day===12) toread = "대하2, 렘1-2";
  			if(day===13) toread = "대하3, 렘3-4";
  			if(day===14) toread = "대하4, 렘5-6";
  			if(day===15) toread = "대하5, 렘7-8";
  			if(day===16) toread = "대하6, 렘9-10";
  			if(day===17) toread = "대하7, 렘11-13";
  			if(day===18) toread = "대하8, 렘14-15";
  			if(day===19) toread = "대하9, 렘16-17";
  			if(day===20) toread = "대하10, 렘18-20";
  			if(day===21) toread = "대하11, 렘21-23";
  			if(day===22) toread = "대하12, 렘24-25";
  			if(day===23) toread = "대하13, 렘26-27";
  			if(day===24) toread = "대하14, 렘28-29";
  			if(day===25) toread = "대하15, 렘30-31";
  			if(day===26) toread = "대하16, 렘32-33";
  			if(day===27) toread = "대하17, 렘34-36";
  			if(day===28) toread = "대하18, 렘37-38";
  			if(day===29) toread = "대하19, 렘39-40";
  			if(day===30) toread = "대하20, 렘41-42";
  		}
  		else if(month===10) {
  			if(day===1) toread = "대하21, 렘43-45";
  			if(day===2) toread = "대하22, 렘46-47";
  			if(day===3) toread = "대하23, 렘48-49";
  			if(day===4) toread = "대하24, 렘50-52";
  			if(day===5) toread = "대하25, 애1-5";
  			if(day===6) toread = "대하26, 겔1-3";
  			if(day===7) toread = "대하27, 겔4-5";
  			if(day===8) toread = "대하28, 겔6-7";
  			if(day===9) toread = "대하29, 겔8-9";
  			if(day===10) toread = "대하30, 겔10-11";
  			if(day===11) toread = "대하31, 겔12-13";
  			if(day===12) toread = "대하32, 겔14-15";
  			if(day===13) toread = "대하33, 겔16-17";
  			if(day===14) toread = "대하34, 겔18-19";
  			if(day===15) toread = "대하35, 겔20-21";
  			if(day===16) toread = "대하36, 겔22-23";
  			if(day===17) toread = "스1, 겔24-25";
  			if(day===18) toread = "스2, 겔26-28";
  			if(day===19) toread = "스3, 겔29-30";
  			if(day===20) toread = "스4, 겔31-32";
  			if(day===21) toread = "스5, 겔33-35";
  			if(day===22) toread = "스6, 겔36-37";
  			if(day===23) toread = "스7, 겔38-39";
  			if(day===24) toread = "스8, 겔40-41";
  			if(day===25) toread = "스9, 겔42-43";
  			if(day===26) toread = "스10, 겔44-46";
  			if(day===27) toread = "느1, 겔47-48";
  			if(day===28) toread = "느2, 시10-12";
  			if(day===29) toread = "느3, 시13-15";
  			if(day===30) toread = "느4, 시16-18";
  			if(day===31) toread = "느5, 시19-21";
  		}
  		else if(month===11) {
  			if(day===1) toread = "느6, 시22-24";
  			if(day===2) toread = "느7, 시25-27";
  			if(day===3) toread = "느8, 시28-30";
  			if(day===4) toread = "느9, 시31-33";
  			if(day===5) toread = "느10, 시34-36";
  			if(day===6) toread = "느11, 시37-39";
  			if(day===7) toread = "느12, 시40-42";
  			if(day===8) toread = "느13, 민1-2";
  			if(day===9) toread = "에1, 민3-4";
  			if(day===10) toread = "에2, 민5-6";
  			if(day===11) toread = "에3, 민7-8";
  			if(day===12) toread = "에4, 민9-10";
  			if(day===13) toread = "에5, 민11-12";
  			if(day===14) toread = "에6, 민13-14";
  			if(day===15) toread = "에7, 민15-16";
  			if(day===16) toread = "에8, 민17-18";
  			if(day===17) toread = "에9, 민19-20";
  			if(day===18) toread = "에10, 민21-22";
  			if(day===19) toread = "욥1, 민23-24";
  			if(day===20) toread = "욥2, 민25-26";
  			if(day===21) toread = "욥3, 민27-28";
  			if(day===22) toread = "욥4, 민29-30";
  			if(day===23) toread = "욥5, 민31-32";
  			if(day===24) toread = "욥6, 민33-34";
  			if(day===25) toread = "욥7, 민35-36";
  			if(day===26) toread = "욥8, 단1-3";
  			if(day===27) toread = "욥9, 단4-5";
  			if(day===28) toread = "욥10, 단6-7";
  			if(day===29) toread = "욥11, 단8-9";
  			if(day===30) toread = "욥12, 단10-12";
  		}
  		else if(month==12) {
  			if(day===1) toread = "욥13, 호1-3";
  			if(day===2) toread = "욥14, 호4-5";
  			if(day===3) toread = "욥15, 호6-8";
  			if(day===4) toread = "욥16, 호9-10";
  			if(day===5) toread = "욥17, 호11-12";
  			if(day===6) toread = "욥18, 호13-14";
  			if(day===7) toread = "욥19, 욜1-3";
  			if(day===8) toread = "욥20, 암1-2";
  			if(day===9) toread = "욥21, 암3-4";
  			if(day===10) toread = "욥22, 암5-6";
  			if(day===11) toread = "욥23, 암7-9";
  			if(day===12) toread = "욥24, 옵1";
  			if(day===13) toread = "욥25, 욘1-2";
  			if(day===14) toread = "욥26, 욘3-4";
  			if(day===15) toread = "욥27, 미1-3";
  			if(day===16) toread = "욥28, 미4-5";
  			if(day===17) toread = "욥29, 미6-7";
  			if(day===18) toread = "욥30, 나1-3";
  			if(day===19) toread = "욥31, 합1-3";
  			if(day===20) toread = "욥32, 습1-3";
  			if(day===21) toread = "욥33, 학1-2";
  			if(day===22) toread = "욥34, 슥1-2";
  			if(day===23) toread = "욥35, 슥3-4";
  			if(day===24) toread = "욥36, 슥5-6";
  			if(day===25) toread = "욥37, 슥7-8";
  			if(day===26) toread = "욥38, 슥9-10";
  			if(day===27) toread = "욥39, 슥11-12";
  			if(day===28) toread = "욥40, 슥13-14";
  			if(day===29) toread = "욥41, 말1-2";
  			if(day===30) toread = "욥42, 말3-4";
  		}
  	}

  	return today + ' : ' + toread;
  }
}

module.exports = toread;
