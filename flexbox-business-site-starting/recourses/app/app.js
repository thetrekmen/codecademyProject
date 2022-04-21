const primaryNav = document.querySelector(".nav .drop-down__container__flex");
const navToggle = document.querySelector("#nav-icon2")

// adds click functionality to hamburger

//figure out how to close the navbar when clicking anywhere else besides the navbar

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open')
  })

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    console.log(visibility);

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
    }
});



// fades my navbar in and out depending on window position
const header = document.querySelector(".nav");
const sectionOne = document.querySelector("#hero__wrapper");

const sectionOneOptions ={
    rootMargin: "-740px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    })
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
