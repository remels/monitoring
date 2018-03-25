//var timeTempstrWithoutNull = [];  //  массив для передачи в svg
//var forServer = 0;
//var timeTempstr = '';  // строка из массива для передачи в svg
//var masStr = [];  // массив для передачи в svg

/*function Create2DArray(rows,columns) {
      var x = new Array(rows);
      for (var i = 0; i < rows; i++) {
            x[i] = new Array(columns);
            for(var u = 0; u < columns; u++)
               x[i][u] = 0;
         }
         return x;
        }
var timeTempMas = Create2DArray(1442,64);*/
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var ind = 1;

var key = 0;  // переключение между архивом и onlin режимом

function temp(){
	if(key == 0)
	 {		 	
	        var xhr = new XMLHttpRequest();
			xhr.open('POST', 'vote2', true);	
			xhr.send("0");
			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status != 200) {
					// обработать ошибку
					alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
					return;
				}
				// обработать результат							
				
				document.getElementById('pol2').setAttribute('points', xhr.responseText);				
				var arr =  xhr.responseText.split(' ');					
				var arrTemp = (200 - arr[arr.length - 1]) / 5;    //200-(temp*5);
				realTemperature2.innerHTML = arrTemp;										
				
			}
			
			xhr.send(null);	
	}
	
}


function vote() {
	if(key == 0)
	 {
			var xhr = new XMLHttpRequest();

			xhr.open('POST', 'vote', true);	
			xhr.send("0");
			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status != 200) {
					// обработать ошибку
					alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
					return;
				}
				// обработать результат							
				
				document.getElementById('pol').setAttribute('points', xhr.responseText);				
				var arr =  xhr.responseText.split(' ');					
				var arrTemp = (200 - arr[arr.length - 1]) / 5;    //200-(temp*5);
				realTemperature1.innerHTML = arrTemp;										
				//svgGraf2.innerHTML = arr;
			}
			xhr.send(null);	
			
      }
      
}

function voteOut(){	
	if(ind == 0) ind = 1;
	else ind = 0;	
		if(ind == 0)  temp();
		else vote();		
	
}
setInterval(voteOut, 2000);

///////////////////////////////////////////////////////////////////////
function arhiv() {
	// button.innerHTML = ' ... ';
    key = 1;
	var xhr = new XMLHttpRequest();

	xhr.open('POST', 'arhiv', true);
	xhr.setRequestHeader('Content-Type', 'text-plain')

	var name = document.forms["reg"].elements["enterArhiv"].value;

	xhr.send(name);
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
				// обработать ошибку
				alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
				return;
		}

		// обработать результат
		document.getElementById('pol').setAttribute('points', xhr.responseText);
		//document.getElementById('dataFromArhiv').innerHTML = xhr.responseText;
	}
}
