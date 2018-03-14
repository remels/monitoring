var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

var myDate = new Date();
var fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +
	" " + myDate.getFullYear() + ", " + days[myDate.getDay()];
document.write(fullDate); // Сегодня: 18 Август 2015, Вторник