import {ctx, map_element} from '../canvas.js';

// Отрисовка карты
export default function drawMap(ways) {

	ways.forEach(function(item) {
		
	map_element.src = 'images/'+ item["img"];
	ctx.drawImage(map_element, item["x"], item["y"], item["w"], item["h"]);

	});
}
			    