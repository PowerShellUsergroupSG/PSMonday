// smoothscroll
smoothScroll.init({
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeOutQuint', // Easing pattern to use
      updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
});

// photogrid
$('.photogrid').photosetGrid({
      // Set the gutter between columns and rows
      gutter: '5px'
});

// Scroll to top
$(function(){
      $(document).on( 'scroll', function(){
            if ($(window).scrollTop() > 100) {
                  $('.back-to-top').addClass('show');
                  //console.log("Show scroll-to-top");
            } else {
                  $('.back-to-top').removeClass('show');
                  //console.log("Hide scroll-to-top");
            }
      });
});

// navbar shadow on scroll
$(document).ready(function(){
      $(window).scroll(function(){
            var y = $(window).scrollTop();
            if( y > 0 ){
                  $("#top-shadow").css({'display':'block', 'opacity':y/20});
            } else {
                  $("#top-shadow").css({'display':'block', 'opacity':y/20});
            }
      });
});

// google map
var map;

function initialize() {
      var location = {lat: 48.1862673, lng: 11.5826454};

      var mapOptions = {
            zoom: 17,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
      };

      var map = new google.maps.Map(document.getElementById('venue-map'), mapOptions);

      var contentString = '<h2>acentrix GmbH</h2><p>Ingolstädter Str. 20<br>4. Stock<br>80807 München<br>Germany</p><p><a href="https://www.google.com/maps/place/Ingolst%C3%A4dter+Str.+20,+80807+M%C3%BCnchen,+Deutschland/@48.1862673,11.5826454,17z/data=!3m1!4b1!4m5!3m4!1s0x479e743af953f27d:0xd455f456e0ff80fa!8m2!3d48.1862673!4d11.5848341">Directions</a></p>'

      var infowindow = new google.maps.InfoWindow({
            content: contentString
      });

      var marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'acentrix GmbH'
      });

      marker.addListener('click', function() {
            infowindow.open(map, marker);
      });
}

google.maps.event.addDomListener(window, 'load', initialize);

// bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// bootstrap popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

// Flow Gallery
$('#speakers-gallery').flowGallery({
            gridType: 'columns',
            columns: {320: 2, 480: 3, 720: 4, 960: 5, 1200: 6},
            //columns: 6,
            //rowItemMinWidth: 150,
            //justifyLastRow: false,
            horizontalGutter: 10,
            verticalGutter: 10,
            items: {style: 'card'},
            card: {
                alwaysShowCaption: true,
                descriptionInCaption: false
            },
            captionShowAnimation: 'pushUp',
            enableCache: false,
            enableDeepLinking: false,
            loadItemChunks: false,
            enableSocialShare: false,
            showFileTypeIcons: false,
            categoryFilters: ["United Kingdom","USA","Netherlands","Norway","Sweden","India","Germany","Serbia","Poland"],
            showFileTypeFilters: false,
            hideEmptyCategories: true,
            showFullscreenButton: false,
            sortBy: [],
            fixMenuOnScroll: true,
            menuFixOffset: 50,
            configUrl: 'flowconfig.json'
        });
