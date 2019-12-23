/**
 * toPageTop
 */
scrollTop('.toPageTop', 500);
function scrollTop(elem, duration) {
    let target = document.querySelector(elem);
    target.addEventListener('click', function () {
        let currentY = window.pageYOffset;
        let step = duration / currentY > 1 ? 10 : 100;
        let timeStep = duration / currentY * step;
        let intervalID = setInterval(scrollUp, timeStep);
        function scrollUp() {
            currentY = window.pageYOffset;
            if (currentY === 0) {
                clearInterval(intervalID);
            } else {
                scrollBy(0, -step);
            }
        }
    });
}

/**
 * login-toggle
 */
const tablet = '960px';

window.onload = function () {
    loginToggle();
}
window.onscroll = function () {
    loginToggle();
}
matchMedia(`(max-width: ${tablet})`).addListener(loginToggle);

function loginToggle() {
    if (matchMedia(`(max-width: ${tablet} )`).matches) {
        return;
    }else{
        let this_y = window.pageYOffset;
        if (this_y > 240) {
            document.querySelector('.Header__item:last-child').style.display = 'none';
        } else {
            document.querySelector('.Header__item:last-child').style.display = 'block';
        }
    }
}