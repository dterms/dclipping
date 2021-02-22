// mobile menu js
const mobilemenu = document.querySelector('.mobilemenu');
const hamburger = document.querySelector('#amarmenu').addEventListener('click', () => {
  mobilemenu.classList.toggle('showmobilemenu')
})


// jquery codes
$(document).ready(function(){
  
  // tabs js
  // $( "#tabs" ).tabs();

  //for multi images upload
  // $('.input-images').imageUploader();

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
