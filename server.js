var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
app.listen(8080);

var masStr = [];  // строка полученная от клиента переведенная в массив для передачи браузеру
var masStr1 = '';
var dataEnd = 0;
var dataStart = 0;
var simple = 0;
var con;
var forClient = 0;   //  минута записываемая в суточный массив, запрашиваемая у клиента
var strFromClient = '';  //  строка полученная от клиента
var timeTempstrWithoutNull = [];
var masStrOll = [];  //  массив содержит все значения времени и температуры
var timeTempstr = '';  //  строка для передачи браузеру
var ttm = [];
var check = 0;     //  1 означает что пришли данные
var stopTime = 0;  //  обнуление суточного массива массива только один раз в 0ч

function Create2DArray(rows,columns) {
      var x = new Array(rows);
      for (var i = 0; i < rows; i++) {
            x[i] = new Array(columns);
            for(var u = 0; u < columns; u++)
               x[i][u] = 0;
         }
         return x;
        }
var timeTempMas = Create2DArray(1442,64);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendfile('Vizitka.html');
});
app.get('/montag', function(req, res) {
	res.sendfile('montag.html');
});
app.get('/remont', function(req, res) {
	res.sendfile('remont.html');
});

app.post('/client', function(req, res) {	
	req.on('data', function(data) {	
		if(decodeURIComponent(data) !== 'chek')
		{			
			check = 1;                  //  1 означает что пришли данные
			var dat = new Date();					
			masStr = decodeURIComponent(data).split(" ");	     //  массив из строки
			masStr.pop();               //  удаляем последний элемент массива - пустое место				
			if(masStr.length >=60)      //  расчет по минуте, запрос каждые две секунды, но два элемента за раз: время и температура 
			{ 
				forClient++;						
			}
			  if(dat.getHours() == 0)   //  обнуляем массив при 0 часов  
				//if(dat.getMinutes() == 52)
				{
					
					if(stopTime == 0)   //  обнуление суточного массива массива только один раз в 0ч
					{
						console.log(dat.getMinutes()); 
						stopTime = 1    //  если 1 то обнуление только 1 раз
						//masStrOll.length = 0;				
						for(var q = 0; q < forClient + 1; q++)  //  обнуляем массив при 0 часов
						{
							timeTempMas[q].length = 0;											
						}	
						forClient = 0;  //  обнуляем количество минут 
				    }					
			    }
			if(dat.getHours() == 1) stopTime = 0;   //  с 1 часа разрешаем обнуление суточного массива	
			timeTempMas[forClient] = masStr;        //  массив от клиента в двухмерный массив	
			masStrOll.length = 0;	                //  обнуляем массив для браузера			
			for(var u = 0; u < forClient + 1; u++)  //  наполняем одномерный массив из двухмерного
				{					
					if(timeTempMas[u][0] == 0) continue
					masStrOll = masStrOll.concat(timeTempMas[u]);
				}				
			timeTempstr = masStrOll.join(' ');	    //  строка со временем и температурой за сутки из одномерного массива			
		    var strDay = String(dat.getDate());     //  определяем название файла, и записвваем в файл
		    var strManth = String(dat.getMonth() + 1);
		    var strYear = String(dat.getFullYear() - 2000);
		    var DataToday = strDay + strManth + strYear;
		    var myWriteableStream = fs.createWriteStream(DataToday + ".txt");			
            myWriteableStream.write(timeTempstr);			
					
	    }
	    else check = 0;                //  1 означает что данные не пришли     
        res.write(String(forClient));  //  запрашиваем у клиента нужную минуту 				
	});
	req.on('end', function() {				
		res.end();
	});
});


app.post('/vote', function(req, res){		
	req.on('data', function(data) {	
		var d = Number(decodeURIComponent(data));
		if(check !=0)
		{				
			res.write(timeTempstr.toString('utf8'));
	    }
	    else res.write('30000 50');			
	});			
		req.on('end', function() {						
		res.end();
	});
});

///////////////////////////////////////////////////////////////////////////
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMas.txt');
//myWriteStream.write(data);			
//dataEnd = 0;
//fs.writeFile(__dirname + '/writeMas.txt', data);			
//masStr = data;		
//res.write('Hello!!!');
//console.log(masStr1.toString('utf8'));
//if(dataStart != 0) masStr = masStr1;		
//dataEnd = 1;
////////////////////////////////////////////////////
//res.write(masStr.toString('utf8'));
//console.log(masStr1.toString('utf8'));
//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//myReadStream.pipe(response);
//fs.readFileSync(__dirname + '/writeMas.txt', function(error, data2) {
//var f = data2;
// res.write(decodeURIComponent(data2));
//  console.log(decodeURIComponent(data2));
//});
//var fileStream = fs.createReadStream(__dirname + '/writeMas.txt');
	    //fileStream.pipe(res);
		
		//var fileStream = fs.createReadStream(__dirname + '/writMas2.txt');
		//	 fileStream.pipe(res); 
		//res.write(masStr1.toString('utf8'));
		//console.log(masStr1.toString('utf8'));	     
		//if(dataEnd == 0) 
		//{
		//	res.write('no');
	    //}
		//if(dataEnd == 1)
		//{
		//	dataStart = 0;	
	   //////////////////////////////////////////////////////
			 
			 //
       ////////////////////////////////////////////////////////////////	
			//res.write(masStr.toString('utf8'));
			//console.log(masStr.toString('utf8'));
			 
		//}
		
		//if(dataEnd == 1) res.write(masStr.toString('utf8'));
		//else res.write('no');	
		//console.log(data.toString('utf8'));
		//console.log(masStr.toString('utf8'));	
		//dataStart = 1; 

app.get('/hello', function(req, res) {
	res.sendfile('hello.html');
});
app.get('/goodBy', function(req, res) {
	res.sendfile('goodBy.html');
});

app.post('/arhiv', function(req, res) {
	req.on('data', function(data) {
		
		//var dat = new Date();
		//var strDay = String(dat.getDate());
		//var strManth = String(dat.getMonth() + 1);
		//var strYear = String(dat.getFullYear() - 2000);
		//var DataToday = strDay + strManth + strYear;
		//var writeableStream = fs.createWriteStream(DataToday + ".txt");

		//var fff = data.toString() + ".txt";
		//var readableStream = fs.createReadStream(fff, "utf8");

		//writeableStream.write("Привет мир!");
		//writeableStream.write("Продолжение записи \n");
		//writeableStream.end("Завершение записи");
		
		var fff = data.toString() + ".txt";
		//console.log(data.toString());
        var readableStream = fs.createReadStream(fff);
		readableStream.on("data", function(chunk) {
			res.write(chunk);
			res.end();
		});
	});
});




