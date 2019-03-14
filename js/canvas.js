var canvas = document.getElementById("canvas");
var ctx  = canvas.getContext('2d'); // Контекст

// "Создаём" острова
var cross = new Image();
var select = new Image();
var cross_active = new Image();
var select_active = new Image();
var map_element = new Image();

// Привязываем изображения
cross.src = 'images/cross.png';
select.src = 'images/select.png';
cross_active.src = 'images/cross_active.png';
select_active.src = 'images/select_active.png';

export {canvas, ctx, cross, select, cross_active, select_active, map_element};