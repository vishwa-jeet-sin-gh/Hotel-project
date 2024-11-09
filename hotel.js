document.getElementById('check-in').addEventListener('change', function() {
    var checkInDate = this.value;
    document.getElementById('check-out').setAttribute('min', checkInDate);
});

const slider = document.querySelector('.slider ul');
let index = 0;

function slideImages() {
    index++;
    if (index >= slider.children.length) {
        index = 0;
    }
    slider.style.transform = `translateX(${-index * 100 / slider.children.length}%)`;
}

setInterval(slideImages, 3000); // Slide every 3 seconds



