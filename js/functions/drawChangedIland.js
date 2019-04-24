import {ctx, select, select_active, map_element} from '../canvas.js';

export default function checkClickIland(map, status){

        // Изменение вида выбранного острова
	    map_element.src = 'images/'+ map["img"];
		// ctx.drawImage(map_element, map["x"] - 3, map["y"] - 3 , map["w"] + 6, map["h"] + 6); //Увеличение острова
		ctx.drawImage(select, (map["x"]), (map["y"]), 122 , 66);

	    if (status >= 2){

	    	accept_iland.style.display = 'none';
			ctx.drawImage(select_active, (map["x"]), (map["y"]), 122 , 66);

	    }

}