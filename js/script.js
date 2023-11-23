    document.addEventListener('DOMContentLoaded', function () {
        var parallax = document.querySelector('.parallax');
        var layers = parallax.querySelectorAll('.layer');
    
        parallax.addEventListener('mousemove', function (e) {
            var x = e.clientX / window.innerWidth - 0.5;
            var y = e.clientY / window.innerHeight - 0.5;
    
            for (var i = 0; i < layers.length; i++) {
                var depth = layers[i].getAttribute('data-depth');
                var translateX = x * depth * 100 + '%';
                var translateY = y * depth * 100 + '%';
    
                layers[i].style.transform = 'translate(' + translateX + ',' + translateY + ')';
            }
        });
    
        var cursor = document.getElementById('cursor');http://127.0.0.1:3000/img/circle.svg
    
        document.addEventListener('mousemove', function (e) {
            var x = e.clientX + window.pageXOffset;
            var y = e.clientY + window.pageYOffset;
    
            cursor.style.transform = 'translate(' + (x - cursor.offsetWidth / 2) + 'px, ' + (y - cursor.offsetHeight / 2) + 'px)';
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
    
    function changeVisibility(currentImage) {
        // Obtén el valor del slider
        const sliderValue = document.getElementById('slider').value;
        
        // Selecciona todos los objetos con etiquetas small, medium y large
        const smallObjects = document.querySelectorAll('.small');
        const mediumObjects = document.querySelectorAll('.medium');
        const largeObjects = document.querySelectorAll('.large');
    
        // Define la lógica de visibilidad basada en el valor del slider
        if (sliderValue >= 0 && sliderValue <= 10) {
            toggleVisibility(smallObjects, true);
            toggleVisibility(mediumObjects, false);
            toggleVisibility(largeObjects, false);
        } else if (sliderValue > 10 && sliderValue <= 20) {
            toggleVisibility(smallObjects, false);
            toggleVisibility(mediumObjects, true);
            toggleVisibility(largeObjects, false);
        } else if (sliderValue > 20 && sliderValue <= 30) {
            toggleVisibility(smallObjects, false);
            toggleVisibility(mediumObjects, false);
            toggleVisibility(largeObjects, true);
        }
    }
    
    function toggleVisibility(elements, isVisible) {
        // Cambia la visibilidad de los elementos según el valor de isVisible
        elements.forEach(element => {
            if (isVisible) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.getElementById('slider');
        const imageContainer = document.querySelector('.image-container-slide img');
    
        slider.addEventListener('input', function () {
            changeImage(this.value);
        });
    
        function changeImage(value) {
            switch (true) {
                case (value >= 0 && value <= 10):
                    imageContainer.src = "img/generadas/mejora_1.png";
                    break;
                case (value > 10 && value <= 20):
                    imageContainer.src = "img/generadas/mejora_2.png";
                    break;
                case (value > 20 && value <= 30):
                    imageContainer.src = "img/generadas/mejora_3.png";
                    break;
                default:
                    break;
            }
            // Llama a la función para cambiar la visibilidad de los objetos
            changeVisibility(imageContainer);
        }
    });
    




///////////////////////


document.addEventListener('DOMContentLoaded', function () {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const imageContainer = document.getElementById('imageContainer');
    const mainImage = document.getElementById('mainImage');

    let draggedThumbnail = null;

    function allowDrop(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();

        if (draggedThumbnail) {
            mainImage.src = draggedThumbnail.src;
            draggedThumbnail = null;
            imageContainer.classList.remove('drag-over');
        }
    }

    function dragStart(event) {
        draggedThumbnail = event.target;
    }

    function dragEnter(event) {
        imageContainer.classList.add('drag-over');
    }

    function dragLeave(event) {
        imageContainer.classList.remove('drag-over');
    }
});



///////////
