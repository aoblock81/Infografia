document.addEventListener("DOMContentLoaded", function () {
  var parallax = document.querySelector(".parallax");
  var layers = parallax.querySelectorAll(".layer");

  parallax.addEventListener("mousemove", function (e) {
    var x = e.clientX / window.innerWidth - 0.5;
    var y = e.clientY / window.innerHeight - 0.5;

    for (var i = 0; i < layers.length; i++) {
      var depth = layers[i].getAttribute("data-depth");
      var translateX = x * depth * 100 + "%";
      var translateY = y * depth * 100 + "%";

      layers[i].style.transform =
        "translate(" + translateX + "," + translateY + ")";
    }
  });

  var cursor = document.getElementById("cursor");


  http: document.addEventListener("mousemove", function (e) {
    var x = e.clientX + window.pageXOffset;
    var y = e.clientY + window.pageYOffset;

    cursor.style.transform =
      "translate(" +
      (x - cursor.offsetWidth / 2) +
      "px, " +
      (y - cursor.offsetHeight / 2) +
      "px)";
  });
});

  /////////////////
    
  function expandImage(clickedImage) {
    // Intercambia la clase center entre la imagen clicada y la imagen central actual
    const centerImage = document.querySelector('.image.center');
    centerImage.classList.remove('center');
    clickedImage.classList.add('center');
    // Llama a la función para cambiar la visibilidad de los objetos
    changeVisibility(clickedImage);
}

/////////////////

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const imageContainer = document.querySelector(".image-container-slide img");
  const tipsContainer = document.querySelector(".tips-container");
  const tipsContent = tipsContainer.querySelector(".tips-content");
  const tipsContainer2 = document.querySelector(".tips-container2");
  const tipsContent2 = tipsContainer2.querySelector(".tips-content2");
  const tipsContainer3 = document.querySelector(".tips-container3");
  const tipsContent3 = tipsContainer3.querySelector(".tips-content3");

  slider.addEventListener("input", function () {
    changeImage(this.value);
  });

  slider.addEventListener("mouseup", function () {
    // Ajusta el valor del slider después de soltarlo
    this.value = adjustSliderValue(this.value);
    changeImage(this.value);
  });

  function adjustSliderValue(value) {
    // Ajusta el valor del slider según tus criterios
    if (value >= 0 && value <= 4) {
      return 0;
    } else if (value > 5 && value <= 15) {
      return 15;
    } else if (value > 16 && value <= 20) {
      return 15;
    } else if (value > 21 && value <= 30) {
      return 30;
    }
    // Devuelve el valor sin cambios si no cumple ninguno de los criterios
    return value;
  }

  function changeImage(value) {
    switch (true) {
      case value >= 0 && value <= 9:
        tipsContainer.style.opacity = "1";
        tipsContainer.style.visibility = "visible";
        tipsContent.style.opacity = "1";
        tipsContent.style.visibility = "visible";
        imageContainer.src = "img/generadas/mejora_1.png";

        tipsContent2.style.opacity = "0";
        tipsContent2.style.visibility = "hidden";
        tipsContent3.style.opacity = "0"; 
        tipsContent3.style.visibility = "hidden";

        break;
      case value > 10 && value <= 20:
        tipsContainer2.style.opacity = "1";
        tipsContainer2.style.visibility = "visible";
        tipsContent2.style.opacity = "1";
        tipsContent2.style.visibility = "visible";

        tipsContent.style.opacity = "0";
        tipsContent.style.visibility = "hidden";
        tipsContent3.style.opacity = "0";
        tipsContent3.style.visibility = "hidden";

        imageContainer.src = "img/generadas/mejora_2.png";
        break;
      case value > 21 && value <= 30:
        tipsContainer3.style.opacity = "1";
        tipsContainer3.style.visibility = "visible";
        tipsContent3.style.opacity = "1";
        tipsContent3.style.visibility = "visible";

        tipsContent.style.opacity = "0";
        tipsContent.style.visibility = "hidden";

        tipsContent2.style.opacity = "0";
        tipsContent2.style.visibility = "hidden";

        imageContainer.src = "img/generadas/mejora_3.png";
        break;
      default:
        break;
    }
    // Llama a la función para cambiar la visibilidad de los objetos
    changeVisibility(imageContainer);
  }

  function changeVisibility(currentImage) {
    // Obtén el valor del slider
    const sliderValue = slider.value;

    // Selecciona todos los objetos con etiquetas small, medium y large
    const smallObjects = document.querySelectorAll(".small");
    const mediumObjects = document.querySelectorAll(".medium");
    const largeObjects = document.querySelectorAll(".large");

    // Define la lógica de visibilidad basada en el valor del slider
    if (sliderValue >= 0 && sliderValue <= 9) {
      toggleVisibility(smallObjects, true);
      toggleVisibility(mediumObjects, false);
      toggleVisibility(largeObjects, false);
    } else if (sliderValue > 10 && sliderValue <= 20) {
      toggleVisibility(smallObjects, false);
      toggleVisibility(mediumObjects, true);
      toggleVisibility(largeObjects, false);
    } else if (sliderValue > 21 && sliderValue <= 30) {
      toggleVisibility(smallObjects, false);
      toggleVisibility(mediumObjects, false);
      toggleVisibility(largeObjects, true);
    }
  }

  function toggleVisibility(elements, isVisible) {
    // Cambia la visibilidad de los elementos según el valor de isVisible
    elements.forEach((element) => {
      if (isVisible) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
});

///////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const imageContainer = document.getElementById("imageContainer");
  const mainImage = document.getElementById("mainImage");

  let draggedThumbnail = null;

  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();

    if (draggedThumbnail) {
      mainImage.src = draggedThumbnail.src;
      draggedThumbnail = null;
      imageContainer.classList.remove("drag-over");
    }
  }

  function dragStart(event) {
    draggedThumbnail = event.target;
  }

  function dragEnter(event) {
    imageContainer.classList.add("drag-over");
  }

  function dragLeave(event) {
    imageContainer.classList.remove("drag-over");
  }
});

var animacion;

document.addEventListener('DOMContentLoaded', function () {
    cargarAnimacion();
});

document.getElementById('btn-tipsmagia').addEventListener('mouseenter', function () {
    if (animacion) {
        animacion.playSegments([60, 110], true);
        animacion.addEventListener('complete', function () {
            animacion.goToAndStop(60, false);
        });
    }
});

document.getElementById('btn-tipsmagia').addEventListener('mouseleave', function () {
    if (animacion) {
        animacion.goToAndStop(60, false);
    }
});

document.querySelector('.txt-tipsmagia').addEventListener('mouseenter', function () {
    if (animacion) {
        animacion.playSegments([60, 110], true);
        animacion.addEventListener('complete', function () {
            animacion.goToAndStop(60, false);
        });
    }
});

document.querySelector('.txt-tipsmagia').addEventListener('mouseleave', function () {
    if (animacion) {
        animacion.goToAndStop(60, false);
    }
});

function cargarAnimacion() {
    var rutaJSON = 'img/magia.json';

    animacion = lottie.loadAnimation({
        container: document.getElementById('btn-tipsmagia'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: rutaJSON
    });

    animacion.playSegments([0, 110], true);
    animacion.addEventListener('complete', function () {
        animacion.goToAndStop(60, true);
    });
}


//////


var $activeSlide = $(".active"),
    $homeSlide = $(".slide"),
    $slideNavPrev = $("#prev"),
    $slideNavNext = $("#next");


function init(){
  TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
  TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll){
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('.card__content'),
    slideInContent = slideIn.find('.card__content'),
    slideOutImg = slideOut.find('.card__img'),
    slideInImg = slideIn.find('.card__img'),
    index = slideIn.index(),
    size = $homeSlide.length;
  console.log(index);  
  
  if(slideIn.length !== 0){
 
    tl
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: '+=40px', ease:Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: '-=100%', ease:Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '-=40px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, "-=0.7")
    }
 
    TweenMax.set($slideNavPrev, {autoAlpha: 1});
 
    if(index === size - 1){
      TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
    }
};
 
$slideNavNext.click(function (e) {
  e.preventDefault();
  
  var slideOut = $('.slide.active'),
       slideIn = $('.slide.active').next('.slide'),
       slideInAll = $('.slide');

  goToNextSlide(slideOut, slideIn, slideInAll);
});

function goToPreviousSlide(slideOut, slideIn, slideInAll){
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('.card__content'),
    slideInContent = slideIn.find('.card__content'),
    slideOutImg = slideOut.find('.card__img'),
    slideInImg = slideIn.find('.card__img'),
    index = slideIn.index(),
    size = $homeSlide.length;
  
  if(slideIn.length !== 0){
 
    tl
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: '-=40px', ease:Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition: 'top', ease:Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: '+=100%', ease:Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '+=40px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease:Power3.easeInOut}, "-=0.7")
    }
 
    TweenMax.set($slideNavNext, {autoAlpha: 1});
 
    if(index === 0){
      TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
    }
};

$slideNavPrev.click(function (e) {
  e.preventDefault();
  
  var slideOut = $('.slide.active'),
       slideIn = $('.slide.active').prev('.slide'),
       slideInAll = $('.slide');

  goToPreviousSlide(slideOut, slideIn, slideInAll);
});




