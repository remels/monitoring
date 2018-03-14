
var unirest = require('unirest');

var temp = 0;  // температура определенная в пикселях
var str = ' ';  // строка, созданная из массива, для передачи на сервер
var masTemp = [50, 150];  //  первая, нулевая точка
var count = 1;  // счетчик обращений clienta

var timerId = setInterval(function() {
	getRend(30, -20);	
}, 2000);

function getRend(max, min) {
	temp = (Math.floor(Math.random() * (max - min + 1)) + min);
	if (temp <= 0) temp = 150 - (temp * 5);
	else temp = temp * (-5) + 150;
	count++;
	masTemp.push(count*50, temp);
	str = masTemp.join(' ');  // делаем строку из массива	
	//unirest.post('http://localhost:8080/client').header('Accept', 'plain/text').send(str).end(function(response) { console.log(response.body); });
	unirest.post('http://93.171.13.173:8080/client').header('Accept', 'plain/text').send(str).end();		
}

setTimeout(function() {
	clearInterval(timerId);
}, 160000);
