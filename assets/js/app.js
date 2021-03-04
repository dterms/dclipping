// mobile menu js
const mobilemenu = document.querySelector('.mobilemenu');
const hamburger = document.querySelector('#amarmenu').addEventListener('click', () => {
  mobilemenu.classList.toggle('showmobilemenu')
})


var fileName = location.pathname.substring(
  location.pathname.lastIndexOf("/") + 1
);
// console.log(fileName);


// jquery codes
$(document).ready(function(){

  if(fileName == "services.html"){
    
    //   tabs js
      $( "#tabs" ).tabs();
  }
  

  if(fileName == "pricing.html"){
    //   for multi images upload
    $('.input-images').imageUploader();
  }

  // owl carousel
  $('.clientTestimonial__body').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navigation: false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        },
        1200:{
            items:1,
            nav:true,
            loop:false
        },
        1400:{
            items:1,
            nav:true,
            loop:false
        },
        1800:{
            items:1,
            nav:true,
            loop:false
        }
    }
  });
  
})
