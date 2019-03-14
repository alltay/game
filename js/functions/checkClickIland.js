import {ctx, select, map_element} from '../canvas.js';

import drawMap from './drawMap.js';
import drawRoad from './drawRoad.js';
import drawChangedIland from './drawChangedIland.js';
import drawBorder from './drawBorder.js';

// Выбор острова
export default function checkClickIland(map, e, selected_iland, ways, background) {

    if(map["type"] == 1 && e.offsetX < map["x"] + map["w"] && e.offsetX > map["x"] && e.offsetY > map["y"] && e.offsetY < map["y"] + map["h"]) {

        drawMap(background, map_element); // Перерисовка карты
        drawChangedIland(map, 1); // Отрисовка измененного острова
		drawRoad(ways[map["way"]]); // Отрисовка пути
        selected_iland = map;
		selected_iland.status  = 1; // Отмечаем, что отров выбран

    }

	return selected_iland

}