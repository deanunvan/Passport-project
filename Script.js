// ----------menu------------


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ---------------------------counter-down--------------------------------

function counter(element, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', function () {
    const approvedPhotos = document.getElementById('approved-photos');
    const guarantee = document.getElementById('guarantee');

    counter(approvedPhotos, 0, 1000000, 1000); 
    counter(guarantee, 0, 200, 30000); 
});

// validation.js

function validateForm() {
    const country = document.getElementById('country').value;
    const docSize = document.getElementById('docSize').value;
    const errorMessage = document.getElementById('errorMessage');

    if (country === 'Zimbabwe' && docSize === 'passportin2by2') {
        window.location.href = 'step2.html';
    } else {
        errorMessage.textContent = 'Incorrect country or document size. Please try again.';
    }
}

// --------------------slide-----------------------

const gridContainer = document.getElementById('gridContainer');
const slideButton = document.getElementById('slideButton');

slideButton.addEventListener('click', () => {
  gridContainer.classList.toggle('slide');
});





