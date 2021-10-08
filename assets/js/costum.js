/*loading page */
jQuery(document).ready(function($) {  

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


const icon = document.querySelector('.navicon');
const link = document.querySelector('.nav-links');
icons = $(this).find("i");
		// Added click event listener to icon hamburg
		icon.addEventListener('click', ()=>{
		   if(link.style.display == 'flex' || link.style.display == '')
		   { link.style.display = 'none';
				$("i").removeClass("fa-arrow-right").addClass("fa-bars");
				$("fa-arrow-right").animate({left: "-=500"}, 2000, "swing", beeRight);

		    }
		   else {link.style.display = 'flex';
		 		$("i").removeClass("fa-bars").addClass("fa-arrow-right");
		 		$(".nav-links").slideDown();
		 		$("fa-bars").animate({left: "-=500"}, 2000, "swing", beeRight);

   
		    }
		})
    
/*var icons = $('.icons');
var icon_fa_icon = icons.attr('data-icon');

if (icon_fa_icon === "bars") {
    icons.attr('data-icon', 'arrow-right');
} else {
    icons.attr('data-icon', 'bars');
}*/
$('.navicon').click(function(){
  
})




  /*icon menu respons*/
        

		/*sticky nav*/
        window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("navbars");
		var sticky = navbar.offsetTop;

		function myFunction() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.add("sticky")
		  } else {
		    navbar.classList.remove("sticky");
		  }
		}
         /*slider*/  // $(document).ready(function(){
		  $('.slick-sliders').slick({
		  	  infinite: true,
		  	  autoplay:true,
			  speed: 300,
			  arrows: true,
			  slidesToScroll: 1,
			  nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-arrow-right"></i></div>',
              prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-arrow-left"></i></div>',
               responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesPerRow: 3
			}
		},
		{
			breakpoint: 900,
			settings: {
				rows: 1,
				slidesPerRow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				rows: 1,
				slidesPerRow: 1
			}
		}
	]
                
});

/*scrolling*/
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
}) 
	  
