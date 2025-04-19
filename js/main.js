let getintouch = document.getElementById('getintouch');
getintouch.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });