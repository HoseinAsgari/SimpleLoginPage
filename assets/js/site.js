// variables
var mode = "";


// events
window.addEventListener('resize', docReady);

docReady();


// funcs
function setMode() {
    if (window.innerWidth >= 1400) {
        mode = "xxl";
    }
    else if (window.innerWidth >= 1200) {
        mode = "xl";
    }
    else if (window.innerWidth >= 992) {
        mode = "lg";
    }
    else if (window.innerWidth >= 768) {
        mode = "md";
    }
    else if (window.innerWidth >= 576) {
        mode = "sm";
    }
    else if (window.innerWidth < 576) {
        mode = "xs";
    }
}

function docReady() {
    setMode();
    centerdClass();
}

function centerdClass() {
    var elements = document.getElementsByClassName('centered');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginTop = 0 + 'px';
        var maTop = (window.innerHeight / 2) - (elements[i].clientHeight / 2) - elements[i].getBoundingClientRect().y;
        if (maTop < elements[i].getBoundingClientRect().y) {
            maTop = 0;
        }
        elements[i].style.marginTop = maTop + 'px';
    }
}