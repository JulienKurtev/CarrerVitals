;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		
		$('.slick').slick({
			autoplay:true,
		  	infinite: true,
		  	slidesToShow: 1,
		  	speed: 2000,
		  	arrows:false,
		  	autoplaySpeed: 3000,
		  	slidesToScroll: 1
});
		
			$('.slick-secondary').slick({
			autoplay:true,
		  	infinite: true,
		  	slidesToShow: 4,
		  	variableWidth: true,
		  	speed: 2000,
		  	arrows:false,
		  	autoplaySpeed: 3000,
		  	slidesToScroll: 1
});

			$('.slick-teritary').slick({
			autoplay:true,
		  	infinite: true,
		  	slidesToShow: 5,
		  	speed: 1500,
		  	arrows:false,
		  	autoplaySpeed: 3000,
		  	slidesToScroll: 1,
		  		 responsive: [
    {
      breakpoint: 800,
      settings: {
    	 slidesToShow: 3,
      },
      
       breakpoint: 600,
      settings: {
      	centerMode: true,
    	 slidesToShow: 2,
      }
    }
  ]
});

		
 

		//Magnific Popup
			$('.btn-open-popup').magnificPopup({
			  type:'inline',
			  midClick: true 
			});


 $(function () {
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});
		
(function(){
    // This class will be added to active tab link 
    // and the content container
    var activeTabClass = 'current';
    
    $('.tabs-nav a').on('click', function(event) {
        var $tabLink = $(this);
        var $targetTab = $($tabLink.attr('href'));
 
        $tabLink
            .parent() // go up to the <li> element
            .add($targetTab)
            .addClass(activeTabClass)
                .siblings()
                .removeClass(activeTabClass);	
        
        event.preventDefault();
    });
})();
				
		
		$('.btn-menu').on('click', function(e){
			$(this).toggleClass('open');
			$('.nav').toggleClass('mobile');
			
			e.preventDefault();
		});
		
		
		
		$('.footer .footer-content h5').on('click', function(){
			$(this).toggleClass('expand');
		});
	});
	
	$(function() {
    		$( "#field-start-date, #field-end-date" ).datepicker();
  	});

})(jQuery, window, document);
