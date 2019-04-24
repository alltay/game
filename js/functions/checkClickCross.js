import {ctx, cross, cross_active} from '../canvas.js';

// Проверка кликов и активация крестиков
export default function checkClickCross(map, e, user, score, output) {
  for (var index = 0, len = map.length; index < len; ++index){
    // Проверяем попали ли мы по крестику
    if(score > 0  && map[index][2] == 0 && e.offsetX < map[index][0] + 20 && e.offsetX > map[index][0] && e.offsetY > map[index][1] && e.offsetY < map[index][1] + 20) {
       
       if (index == 0 || map[index-1][2] > 0) {

          map[index][2] = 1;
          ctx.drawImage(cross_active, map[index][0], map[index][1], 20, 20); // Заменяем крестик
          score = score - 100; // Вычетаем очки
          user.innerText = `${score}`;
          output.innerText += ` Клик по крестику ${map[index][0]}. `;

      } else {

        alert('Нельзя пропускать крестики');

      }

    } else if (score == 0 && map[index][2] == 0 && e.offsetX < map[index][0] + 20 && e.offsetX > map[index][0] && e.offsetY > map[index][1] && e.offsetY < map[index][1] + 20) {

        alert('У вас закончились крестики');

    } else {
    
        output.innerText += ``;
   
    }
  }

  return [score, map];
}