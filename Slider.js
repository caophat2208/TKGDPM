$(document).ready(function () {
  let currentSlide = 0;
  const slides = $('.slide-image');
  const totalSlides = slides.length;

  // Function to move to the next slide
  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
  }

  // Function to move to the previous slide
  function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
  }

  // Update the position of the slide-stage
  function updateSlidePosition() {
      $('.slide-stage').css('transform', `translateX(-${currentSlide * 100}%)`);
  }

  // Event listeners for next and previous controls
  $('.slide-control-next').click(nextSlide);
  $('.slide-control-prev').click(prevSlide);

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000); // Adjust the time as needed
});
