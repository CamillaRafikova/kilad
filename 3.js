var styles = {};
styles.width = '291px';  // задаем параметры
styles.height = '260px';

spriteAnimation('mk', 'walk2.png', styles); // вызываем функцию

function spriteAnimation(elementId, imgName, styles) { 
  
  var img = document.createElement('img');
  var offset = 0;//сдвиг
  img.onload = function () {  //как только спрайт загружается
    var element = document.getElementById(elementId);
    element.style.width      = styles.width;
    element.style.height     = styles.height;
    element.style.background = "url('" + imgName + "') " + offset + "px 50%"; //меняем стили для нашего элемента
    var i = 0;
    
      interval = setInterval(function() {  //запускаем интервал
        if (offset < img.width) { //для смены позиции изображения
          i=i+291; // если дошли до конца спрайта
        } else { 
          i = 291; // то возвращаемся к началу
        }
        offset = -1*i; //сдвиг по слайду
        element.style.background = "url('" + imgName + "') " + offset + "px 50%";  
      } ,110) //меняем позиционирование спрайта
    }
  img.src = imgName; //даем имя нашего спрайта
}
////////////////////////////////////////////////////////////////////смена надписи

