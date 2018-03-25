var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
app.listen(8080);


//var dataEnd = 0;
//var dataStart = 0;
//var simple = 0;
//var con;
//var strFromClient = '';  //  строка полученная от клиента
//var timeTempstrWithoutNull = [];
//var timeTempstr = '';  //  строка для передачи браузеру
//var ttm = [];

var masStrOll = [];  //  массив содержит все значения времени и температуры
var masStrOll2 = [];  //  массив содержит все значения времени и температуры
var forClient = 0;   //  минута записываемая в суточный массив, запрашиваемая у клиента
var forClient2 = 0;   //  минута записываемая в суточный массив, запрашиваемая у клиента
var masStr = [];  // строка полученная от клиента переведенная в массив для передачи браузеру
var masStr2 = [];
var check = 0;     //  1 означает что пришли данные
var check2 = 0;     //  1 означает что пришли данные
var stopTime = 0;  //  обнуление суточного массива массива только один раз в 0ч
var stopTime2 = 0;  //  обнуление суточного массива массива только один раз в 0ч

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
var timeTempMas2 = Create2DArray(1442,64);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendfile('Vizitka.html');
});
app.get('/monitor', function(req, res) {
	res.sendfile('index.html');
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
						
			if(masStr.length >=60)      //  расчет по минуте, запрос каждые две секунды, но два элемента за раз: время и температура 
			{ 
				forClient++;						
			}
			  if(dat.getHours() == 0)   //  обнуляем массив при 0 часов  
				//if(dat.getMinutes() == 52)
				{					
					if(stopTime == 0)   //  обнуление суточного массива массива только один раз в 0ч
					{						
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
			//console.log(timeTempstr);			
		    var strDay = String(dat.getDate());     //  определяем название файла, и записвваем в файл
		    var strManth = String(dat.getMonth() + 1);
		    var strYear = String(dat.getFullYear() - 2000);
		    var DataToday = strDay + strManth + strYear;
		    var myWriteableStream = fs.createWriteStream(DataToday + ".txt");			
            myWriteableStream.write(timeTempstr);			
					
	    }
	    else check = 0;                //  1 означает что данные не пришли     
        res.write(String(forClient));  //  запрашиваем у клиента нужную минуту 
        //console.log(forClient);				
	});
	req.on('end', function() {				
		res.end();
	});
});
/////////////////////////////////////////////////////////////////////////////////////
app.post('/client2', function(req, res) {	
	req.on('data', function(data) {	
		if(decodeURIComponent(data) !== 'chek')
		{			
			check2 = 1;                  //  1 означает что пришли данные
			var dat = new Date();								
			masStr2 = decodeURIComponent(data).split(" ");	     //  массив из строки			
						
			if(masStr2.length >=60)      //  расчет по минуте, запрос каждые две секунды, но два элемента за раз: время и температура 
			{ 
				forClient2++;						
			}
			  if(dat.getHours() == 0)   //  обнуляем массив при 0 часов  
				//if(dat.getMinutes() == 52)
				{					
					if(stopTime2 == 0)   //  обнуление суточного массива массива только один раз в 0ч
					{						
						stopTime2 = 1    //  если 1 то обнуление только 1 раз
						//masStrOll.length = 0;				
						for(var q = 0; q < forClient2 + 1; q++)  //  обнуляем массив при 0 часов
						{
							timeTempMas2[q].length = 0;											
						}	
						forClient2 = 0;  //  обнуляем количество минут 
				    }					
			    }
			if(dat.getHours() == 1) stopTime2 = 0;   //  с 1 часа разрешаем обнуление суточного массива	
			timeTempMas2[forClient2] = masStr2;        //  массив от клиента в двухмерный массив	
			masStrOll2.length = 0;	                //  обнуляем массив для браузера			
			for(var u = 0; u < forClient2 + 1; u++)  //  наполняем одномерный массив из двухмерного
				{					
					if(timeTempMas2[u][0] == 0) continue
					masStrOll2 = masStrOll2.concat(timeTempMas2[u]);
				}				
			timeTempstr2 = masStrOll2.join(' ');	    //  строка со временем и температурой за сутки из одномерного массива
			//console.log(timeTempstr);			
		    var strDay = String(dat.getDate());     //  определяем название файла, и записвваем в файл
		    var strManth = String(dat.getMonth() + 1);
		    var strYear = String(dat.getFullYear() - 2000);
		    var DataToday = strDay + strManth + strYear + "t2";
		    var myWriteableStream2 = fs.createWriteStream(DataToday + ".txt");			
            myWriteableStream2.write(timeTempstr2);			
					
	    }
	    else check2 = 0;                //  1 означает что данные не пришли     
        res.write(String(forClient2));  //  запрашиваем у клиента нужную минуту 
        //console.log(forClient);				
	});
	req.on('end', function() {				
		res.end();
	});
});
/////////////////////////////////////////////////////////////////////////////////////



app.post('/vote', function(req, res){		
	req.on('data', function(data) {	
		var d = Number(decodeURIComponent(data));
		if(check !=0)
		{				
			res.write(timeTempstr.toString('utf8'));
			//console.log(timeTempstr.toString('utf8'));
	    }
	    else res.write('30000 50');
	    			
	});			
		req.on('end', function() {						
		res.end();
	});
});
////////////////////////////////////////////////////////////////////////////////////////
app.post('/vote2', function(req, res){		
	req.on('data', function(data) {	
		var d2 = Number(decodeURIComponent(data));
		if(check2 !=0)
		{				
			res.write(timeTempstr2.toString('utf8'));
			//console.log(timeTempstr.toString('utf8'));
	    }
	    else res.write('30002 52');
	    			
	});			
		req.on('end', function() {						
		res.end();
	});
});
////////////////////////////////////////////////////////////////////////////////////////

app.get('/hello', function(req, res) {
	res.sendfile('hello.html');
});
app.get('/goodBy', function(req, res) {
	res.sendfile('goodBy.html');
});

app.post('/arhiv', function(req, res) {
	req.on('data', function(data) {		
		
		var fff = data.toString() + ".txt";
		fs.readFile(fff, 'utf8', function(error, data) {
         res.write(data);
        });

		              //console.log(data.toString());
        //var readableStream = fs.createReadStream(fff);
		//readableStream.on("data", function(chunk) {
			//res.write(chunk);
			//res.write("42066 85 42068 85 42069 85 42071 85 42072 85 42074 85 42075 85 42077 85 42078 85 42080 85 42081 85 42083 85 42084 85");
	    //res.end();	    
		//});	
		
	});
	req.on('end', function() {				
		res.end();
	});		
	
});




