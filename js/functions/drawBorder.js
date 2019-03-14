import {ctx, select, map_element} from '../canvas.js';

export default function drawBorder(background){

    background.forEach(function(map) { // Ререндер рамки
        
        if (map.type == 2) {
            map_element.src = 'images/'+ map["img"];
		    ctx.drawImage(map_element, map["x"], map["y"], map["w"], map["h"]);
		}

            
	});

}