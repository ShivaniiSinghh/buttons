// script.js
window.onload = function() {
    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', function() {
            this.classList.add('animate');
            setTimeout(() => {
                this.classList.remove('animate');
            }, 700);
        });
    }
};
