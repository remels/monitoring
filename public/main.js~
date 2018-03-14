function vote() {
	// button.innerHTML = ' ... ';

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'vote', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			// обработать ошибку
			alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			return;
		}

		// обработать результат
		document.getElementById('pol').setAttribute('points', xhr.responseText);
		var arr = [];
		arr = xhr.responseText.split(' ');
		var arrTemp = (200 - arr[arr.length - 1]) / 5 //150-(temp*5);
		realTemperature.innerHTML = arrTemp;
	}
	xhr.send(null);
}
setInterval(vote, 2000);

function arhiv() {
	// button.innerHTML = ' ... ';

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
		document.getElementById('dataFromArhiv').innerHTML = xhr.responseText;
	}
}
