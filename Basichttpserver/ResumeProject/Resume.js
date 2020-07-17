var timeInterval;
var navMenu = document.querySelectorAll('.nav-menu a');
for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(sectionId);
        console.log(targetsection);
        timeInterval = setInterval(scrollvartically, 20, targetsection);
    });
}

function scrollvartically(targetsection) {
    var targetposition = targetsection.getBoundingClientRect();
    if (targetposition.top <= 0) {
        clearInterval(timeInterval);
        return;
    }
    window.scrollBy(0, 50);
}
var progressbar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkscroll);
var animationedone = false;

function initializebars() {
    for (let bar of progressbar) {
        bar.style.width = 0 + '%';
    }
}
initializebars();

function fillBars() {
    for (let bar of progressbar) {
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentwidth = 0;
        let interval = setInterval(function() {
            if (currentwidth >= targetwidth) {
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width = currentwidth + '%';
        }, 5);
    }
}

function checkscroll() {
    var coordinate = skillContainer.getBoundingClientRect();
    if (!animationedone && coordinate.top <= window.innerHeight) {
        animationedone = true;
        console.log("skills section visible");
        fillBars();
    } else if (coordinate.top > window.innerHeight) {
        animationedone = false;
        initializebars();
    }
}