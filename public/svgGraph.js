'use strict';

let a = 1;
//  43200
document.write(`<svg width="43300" height="100%">`);

document.write("<polyline id='pol' points='50 150 100 200' fill='#b6bbc2' stroke='red' stroke-width='3'/>");

for (let i = 0; i < 8; i++) {
	if (i == 4) document.write("<line x1='50' y1='" + (i * 50) + "' x2='43250' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (3) + "'/>");
	else document.write("<line x1='50' y1='" + (i * 50) + "' x2='43250' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (0.4) + "'/>"); // горизонтальные
}

document.write("<line x1='50' y1='1' x2='50' y2='350' stroke='black' stroke-width='1.5'/>'");
for (let i = 0; i < 145; i++) {
	if ((i == 6) || (i == 12) || (i == 18) || (i == 24) || (i == 30) || (i == 36) || (i == 42) || (i == 48) || (i == 54) || (i == 60) || (i == 66) || (i == 72) || (i == 78) || (i == 84) || (i == 90) || (i == 96) || (i == 102) || (i == 108) || (i == 114) || (i == 120) || (i == 126) || (i == 132) || (i == 138) || (i == 144))
	document.write("<line x1='" + (300 * i + 50) + "' y1='1' x2='" + (300 * i + 50) + "' y2='350' stroke='black' stroke-width='3'/>");	
	else document.write("<line x1='" + (300 * i + 50) + "' y1='1' x2='" + (300 * i + 50) + "' y2='350' stroke='black' stroke-width='2'/>"); // вертикальные
}
for (let i = 0; i < 1440; i++) {		
	document.write("<line x1='" + (30 * i + 50) + "' y1='1' x2='" + (30 * i + 50) + "' y2='350' stroke='black' stroke-width='0.4'/>"); // вертикальные минуты
}



/**
 * Graphic container of temp
 */
document.write("<text x='20' y='207'>0</text>");
document.write("<text x='13' y='157'>10</text>");
document.write("<text x='13' y='107'>20</text>");
document.write("<text x='13' y='57'>30</text>");
document.write("<text x='5' y='257'>-10</text>")
document.write("<text x='5' y='307'>-20</text>");

/**
 * Graphic container of time
 */
 for (let i = 0; i < 145; i++) {	
	if ((i == 6) || (i == 12) || (i == 18) || (i == 24) || (i == 30) || (i == 36) || (i == 42) || (i == 48) || (i == 54) || (i == 60) || (i == 66) || (i == 72) || (i == 78) || (i == 84) || (i == 90) || (i == 96) || (i == 102) || (i == 108) || (i == 114) || (i == 120) || (i == 126) || (i == 132) || (i == 138) || (i == 144))
	document.write("<text x='" + (300 * i + 40)+ "' y='375'>" + (i/6) + "ч</text>");
	else 
	{
		//for (let y = 0; y < 6; y++) {	
	     //  document.write("<text x='" + (300 *i) + "' y='375'>" + i + "ч" + y*10 + "м</text>");	
         //}
	}
}
for (let i = 1; i < 25; i++) {	
	if (i == 1) document.write("<text x='" + (1800 * i + 40)+ "' y='375'>" + i + "ч</text>");	
	else document.write("<text x='" + (1800 * i + 40) + "' y='375'>" + i + "ч</text>");
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (300 *i) + "' y='375'>0ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (1800+(300 *i)) + "' y='375'>1ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (3600+(300 *i)) + "' y='375'>2ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (5400+(300 *i)) + "' y='375'>3ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (7200+(300 *i)) + "' y='375'>4ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (9000+(300 *i)) + "' y='375'>5ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (10800+(300 *i)) + "' y='375'>6ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (12600+(300 *i)) + "' y='375'>7ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (14400+(300 *i)) + "' y='375'>8ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (16200+(300 *i)) + "' y='375'>9ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (18000+(300 *i)) + "' y='375'>10ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (19800+(300 *i)) + "' y='375'>11ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (21600+(300 *i)) + "' y='375'>12ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (23400+(300 *i)) + "' y='375'>13ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (25200+(300 *i)) + "' y='375'>14ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (27000+(300 *i)) + "' y='375'>15ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (28800+(300 *i)) + "' y='375'>16ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (30600+(300 *i)) + "' y='375'>17ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (32400+(300 *i)) + "' y='375'>18ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (34200+(300 *i)) + "' y='375'>19ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (36000+(300 *i)) + "' y='375'>20ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (37800+(300 *i)) + "' y='375'>21ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (39600+(300 *i)) + "' y='375'>22ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (41400+(300 *i)) + "' y='375'>23ч" + i*10 + "м</text>");	
}
for (let i = 1; i < 6; i++) {	
	document.write("<text x='" + (43200+(300 *i)) + "' y='375'>24ч" + i*10 + "м</text>");	
}

document.write(`</svg>`);
