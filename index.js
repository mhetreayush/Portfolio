var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

function toggleMe() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

}
themeToggleBtn.addEventListener('click', toggleMe);

let projectCard = `
<div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 xs:p-8 dark:bg-gray-800 dark:border-gray-700">
     <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">ID Touch</h5>
        <div class="flex flex-col gap-4 items-baseline text-gray-900 dark:text-white">
            <img class="rounded border-4 border-black border-spacing-2 dark:border-white" src="images/idTouch.png" alt="">
            <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-base px-5 py-2.5 inline-flex justify-center w-full text-center"><a href="https://devpost.com/software/bunty" target="_blank">Learn More</a></button>
        </div>
</div>
`

document.getElementById("projectCardHolder").innerHTML = projectCard;
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
    }
});
function scrollToAnimationDepricated(x, y, animation_time = 100) {
    // Animation time in milliseconds
    let speed_x = -(window.scrollX - x) / animation_time // v = s/t #JEE
    let speed_y = -(window.scrollY - y) / animation_time // v = s/t #JEE
    let animation_id = setInterval(() => {
        // This is happening every millisecond so you can calculate how much you will have to scroll per intravel
        window.scrollBy(speed_x, speed_y) // Or you can use the other method where we use deltaTime which is more reliable
    }, 1)
    setTimeout(() => {
        window.scrollTo(x, y)
        clearInterval(animation_id)
    }, animation_time)
    // This will stop the animation after the time is over and set the scroll to the actual value for resolving errors in slower systems
}

function scrollToAnimation(x, y, animation_time = 100) {
    // Animation time in seconds
    let startTime = Date.now()

    let deltaX = x - window.scrollX
    let deltaY = y - window.scrollY

    let startX = window.scrollX
    let startY = window.scrollY
    let animation_id = setInterval(() => {
        frameTime = Date.now() - startTime // This is the time elapsed after the animation is started
        window.scrollTo(
            startX + deltaX * (frameTime / animation_time),
            startY + deltaY * (frameTime / animation_time)
        )
    }, 0)
    setTimeout(() => {
        window.scrollTo(x, y)
        clearInterval(animation_id)
    }, animation_time)
    // This will stop the animation after the time is over and set the scroll to the actual value for resolving errors in slower systems
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        toggleMe();
    }

    if (e.keyCode == 83) {
        scrollToAnimation(0, window.innerHeight-50);
    }
    if (e.keyCode == 87) {
        scrollToAnimation(0, -window.innerHeight+50);
    }
}

setTimeout(()=>{
    document.querySelector("body").classList.remove("overflow-hidden")
    document.getElementById("splashScreen").classList.remove("flex");
    document.getElementById("splashScreen").classList.add("hidden");
}, 2000)
