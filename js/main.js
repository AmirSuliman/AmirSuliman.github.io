$(document).ready(function (){
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse')
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            div:true
        },
        600:{
            items:3,
            div:false
        },
        1000:{
            items:5,
            div:true,
            loop:false
        }
    }
})
});