$(document).ready(function(){

// Counter Up

$('.counter-up').counterUp({
    delay: 10,
    time: 2500
});	

// Reveal Content

window.sr = ScrollReveal();
sr.reveal('.reveal');

// Get the Current Year

var thisYear = new Date().getFullYear();
$('.current-year').html(thisYear);

// Portfolio Hover

$('#grid li').hover(function(){
	$(this).children().addClass('hovered');
}, function(){
	$(this).children().removeClass('hovered');
});

$('.portfolio-layer a.close').click(function(){
	$(this).parent().removeClass('hovered');
});

// Carousel

var owlNewsletter = $(".owl-newsletter");
  owlNewsletter.owlCarousel({
  	autoPlay: false,
	items: 5,
	itemsDesktop : [1100,4],
	itemsDesktopSmall : [900,3],
	itemsTablet: [700,2],
	itemsMobile: [500,1],
	navigation: true,
	scrollPerPage : false,
	pagination: false,
  });

// Limit Text on Layer  

$(".portfolio-layer p").each(function(i){
    len=$(this).text().length;
    if(len>120)
    {
      $(this).text($(this).text().substr(0,120)+'...');
    }
}); 

$(".portfolio-layer.half-text p").each(function(i){
    len=$(this).text().length;
    if(len>40)
    {
      $(this).text($(this).text().substr(0,40)+'...');
    }
});

// Button Bounce Effect

$(".bttn").click(function(){
   $(this).addClass('bounce');
   setTimeout( function(){
    $(".bttn").removeClass('bounce');
   },500);
});

// Grid Portfolio

new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.5,
	maxDuration : 0.7,
	viewportFactor : 0.4
} );

// Checkbox

$('.ac-custom input').on('change', function(){
	$(this).parents('.input').toggleClass('checked');
});

// Form Validation

$('#mobile_number').numeric();

$("#contact-me form").validate({
	rules: {
	  full_name: {
	    required: true,
	    minlength: 5
	  },
	  subject: {
	    required: true,
	    minlength: 3
	  },
	  email_address: {
	    required: true,
	    email: true
	  },
	  mobile_number: {
	  	required: true,
	  	minlength: 11,
	  	maxlength: 11,
	  	number: true
	  },
	  message: {
	    required: true,
	    minlength: 10
	  },
	},
	submitHandler: function (form) {
	    $.ajax({
	    type: "POST",
	    url: "mail.php",
	    data: $(form).serialize(),
	    success: function () {
	        $("#contact-me form :input").prop("disabled", true);
	        $('#contact-me .thank-you').fadeIn();
	    }
	    });
	    return false; // required to block normal submit since you used ajax
	},
	errorPlacement: function(){
	    return false;  // suppresses error message text
	}
});

// Google Map

var map;
var SamanRashidi = new google.maps.LatLng(32.4943981,54.451405);

function initialize() {

    var roadAtlasStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#0a9abd"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

var mapOptions = {
    zoom: 5,
    scrollwheel: false,
    center: SamanRashidi,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
    }
};

map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

var mapCanvas = document.getElementById('map_canvas');
var myLatlng = new google.maps.LatLng(31.8943981,54.451405);
var image = 'images/marker.png';
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
icon: image

});

marker.setAnimation(google.maps.Animation.BOUNCE);
var styledMapOptions = {
    
};

var usRoadMapType = new google.maps.StyledMapType(
    roadAtlasStyles, styledMapOptions);

map.mapTypes.set('usroadatlas', usRoadMapType);
map.setMapTypeId('usroadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);
					

});

