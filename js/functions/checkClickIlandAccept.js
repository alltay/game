// Вывод окна подтверждения
export default function checkClickIlandAccept(map, e) {


    if(map["type"] == 1 && e.offsetX < map["x"] + map["w"] - 30 && e.offsetX > map["x"] + 30 && e.offsetY > map["y"] + 30  && e.offsetY < map["y"] + map["h"] - 30) {  // УТОЧНИТЬ !!

      $('#myModal').modal('show');
      iland_modal.innerText = map["img"]

    } 
}