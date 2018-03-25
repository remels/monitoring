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
var key = 0;  // переключение между архивом и onlin режимом

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
				realTemperature2.innerHTML = 89;				
				//svgGraf2.innerHTML = arr;
			}
			xhr.send(null);
	///////////////////////////////////////
	var xhr2 = new XMLHttpRequest();

			xhr2.open('POST', 'vote2', true);	
			xhr2.send("0");
			xhr2.onreadystatechange = function() {
				if (xhr2.readyState != 4) return;

				if (xhr2.status != 200) {
					// обработать ошибку
					alert('Ошибка ' + xhr2.status + ': ' + xhr2.statusText);
					return;
				}
				// обработать результат							
				
				document.getElementById('pol2').setAttribute('points', xhr2.responseText);				
				var arr2 =  xhr2.responseText.split(' ');					
				var arrTemp2 = (200 - arr2[arr2.length - 1]) / 5;    //200-(temp*5);
				//realTemperature2.innerHTML = arrTemp2;
				//realTemperature2.innerHTML = '89';				
				//svgGraf2.innerHTML = arr;
			}
			xhr2.send(null);
	///////////////////////////////////////		
      }
}
setInterval(vote, 2000);
///////////////////////////////////////////////////////////////////////
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
