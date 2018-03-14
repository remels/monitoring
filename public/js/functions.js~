(function () {

	/**
	 * svg graphic's width
	 * 1px = 20sec
	 */
	var svgWidth = 4320;
	var h_linesCount = svgWidth / (GRAPHICS_CONFIG.lineSpace * 3);



	/**
	 * graphic's from GRAPHICS_JSON
	 * @return {string} "graphic's list"
	 */
	window.getGraphics = function () {
		var graphicsList = "";

		GRAPHICS_JSON.forEach( function(graphic, index) {

			graphicsList += '<div class="graphic-container">\n';
			graphicsList += '\t<div class="graphic-menu">\n';

			graphic.sensors.forEach( function(sensor, index) {
				graphicsList += '\t\t<div class="sensor">' + sensor.sensor_name + '</div>\n';
			} );

			graphicsList += '\t</div>\n';

			graphicsList += '\t<div class="svg-container">';
			graphicsList += '\t\t<svg width="' + svgWidth + 'px" height="100%">';

			/**
			 * вертикальные линии
			 */
			for (var i = 0; i < h_linesCount; i++) {
				/**
				 * каждая шестая линия - жирная
				 * @todo: улучшить условие
				 */
				if ((i == 5) || (i == 11) || (i == 17) || (i == 23) || (i == 29) || (i == 35) || (i == 41) || (i == 47) || (i == 53) || (i == 59) || (i == 65) || (i == 71) || (i == 77) || (i == 83) || (i == 89) || (i == 95) || (i == 101) || (i == 107) || (i == 113) || (i == 119) || (i == 125) || (i == 131) || (i == 137) || (i == 143)) {
					graphicsList += "<line x1='" + (80 + i * 30) + "' y1='1' x2='" + (80 + i * 30) + "' y2='350' stroke='black' stroke-width='2.5'/>";
				} else graphicsList += "<line x1='" + (80 + i * 30) + "' y1='1' x2='" + (80 + i * 30) + "' y2='350' stroke='black' stroke-width='1'/>";
			}

			for (let i = 0; i < 8; i++) {
				if (i == 4) document.write("<line x1='50' y1='" + (i * 50) + "' x2='4370' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (2.5) + "'/>");
				else document.write("<line x1='50' y1='" + (i * 50) + "' x2='4370' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (1) + "'/>"); // горизонтальные
			}

			graphicsList += '\t\t</svg>';
			graphicsList += '\t</div>';

			graphicsList += '</div>\n';

		} ); // forEach. GRAPHICS_CONFIG

		return graphicsList;
	}; // function. getGraphics

})();