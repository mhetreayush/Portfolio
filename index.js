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

function createProjCard(projName, logo, link){
    let projectCard = `
    <div class="p-4 my-10 max-w-sm flex flex-col justify-between bg-white rounded-lg text-gray-900 dark:text-white border shadow-md sm:p-8 xs:p-8 dark:bg-gray-800 dark:border-gray-700">
         <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">${projName}</h5>
                <img src="images/${logo}" alt="">
                <button type="button" class="my-6 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-base px-5 py-2.5 inline-flex justify-center w-full text-center"><a href="${link}" target="_blank">Learn More</a></button>
    </div>
    `
    document.getElementById("projectCardHolder").innerHTML+=projectCard
}

createProjCard("IdTouch", "idTouch.png", "https://devpost.com/software/bunty")
createProjCard("AirBnb Clone", "airbnb.png", "https://mhetreayush.github.io/airbnbClone/")

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
    }
});

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        toggleMe();
    }

    if (e.keyCode == 83) {
        window.scrollBy(0, window.innerHeight-50);
    }
    if (e.keyCode == 87) {
        window.scrollBy(0, -window.innerHeight+50);
    }
}

setTimeout(()=>{
    document.querySelector("body").classList.remove("overflow-hidden")
    document.getElementById("splashScreen").classList.remove("flex");
    document.getElementById("splashScreen").classList.add("hidden");
}, 2000)