// mobile menu js
const mobilemenu = document.querySelector(".mobilemenu");
const hamburger = document
  .querySelector("#amarmenu")
  .addEventListener("click", () => {
    mobilemenu.classList.toggle("showmobilemenu");
  });

const sticky__header = document.querySelector("header");
const sticky__mobilemenu = document.querySelector(".mobilemenu");
const sticky__servicefilter = document.querySelector('.serviceservices__filterHeader');

let pos;
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  console.clear()
  console.log(scroll)

  if (fileName == "service.html") {

    if(scroll > 405){
      sticky__servicefilter.classList.add('sticky__serviceservices__filterHeader');
    } else {
      sticky__servicefilter.classList.remove('sticky__serviceservices__filterHeader');
    }


    if (pos > scroll) {
      sticky__header.style.top = "0";
      sticky__header.style.zIndex = "3";
      sticky__mobilemenu.style.top = "0";
      sticky__mobilemenu.style.zIndex = "3";
    } else {
      sticky__header.style.top = "-100px";
      sticky__mobilemenu.style.top = "-100px";
    }

  } else {
    if (pos > scroll) {
      sticky__header.style.top = "0";
      sticky__mobilemenu.style.top = "0";
    } else {
      sticky__header.style.top = "-100px";
      sticky__mobilemenu.style.top = "-100px";
    }
  }
  pos = scroll;
});

var fileName = location.pathname.substring(
  location.pathname.lastIndexOf("/") + 1
);
// console.log(fileName);

// jquery codes
$(document).ready(function () {
  if (fileName == "service.html") {
    //   tabs js
    $("#tabs").tabs();
  }

  if (fileName == "pricing.html") {
    //   for multi images upload
    $(".input-images").imageUploader();
  }

  if (fileName == "" || fileName == "index.html") {
    // owl carousel
    $(".clientTestimonial__body").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      navigation: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: true,
          loop: false,
        },
        1200: {
          items: 1,
          nav: true,
          loop: false,
        },
        1400: {
          items: 1,
          nav: true,
          loop: false,
        },
        1800: {
          items: 1,
          nav: true,
          loop: false,
        },
      },
    });
  }
});

// service page filter
if (fileName == "service.html") {
  const filter = document.querySelectorAll(
    ".serviceservices__filterHeader ul li"
  );

  const servicefilter = Array.from(filter);

  servicefilter.forEach((menu) => {
    console.log(servicefilter[0].classList);
    menu.addEventListener("click", (event) => {
      servicefilter.forEach((filttter) => {
        filttter.classList.remove("active");
      });

      event.target.classList.add("active");
    });
  });
}

var i;
const services = document.querySelectorAll(".service");
const showService = (service) => {
  for (i = 0; i < services.length; i++) {
    services[i].classList.remove("showservice");
  }

  document.getElementById(service).classList.add("showservice");

  if(screen.availHeight > 900 && screen.availWidth > 600){
    scrollTo(0, 700)
  } else if (screen.availHeight < 700 && screen.availWidth < 400){
    scrollTo(0, 400)
  }
};
