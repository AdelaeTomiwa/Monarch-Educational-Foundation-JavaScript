function initMap() {
   var options = {
      zoom: 14,
      center: { lat: 7.3775, lng: 3.947 },
   };

   var map = new google.maps.Map(
      document.querySelector('.map-container'),
      options
   );

   var marker = new google.maps.Marker({
      position: { lat: 7.3775, lng: 3.947 },
      map: map,
   });

   var infoWindow = new google.maps.InfoWindow({
      content: '<h2>Monarch Educational Foundation</h2>',
   });

   marker.addListener('click', () => {
      infoWindow.open(map, marker);
   });
}

// Toggle Burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
   navLinks.classList.toggle('open');
   burger.classList.toggle('close');
});
