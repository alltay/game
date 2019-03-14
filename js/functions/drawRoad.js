import {ctx, cross, cross_active} from '../canvas.js';

// Отрисовка путей
export default function drawRoad(ways) {

    ways.forEach(function(item) {

       if (item[2] == 1) { // Активный крест

           ctx.drawImage(cross_active, item[0], item[1], 20, 20);

        } else {

           ctx.drawImage(cross, item[0], item[1], 20, 20);

        }
    });
			        
}
			    