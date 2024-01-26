document.addEventListener("DOMContentLoaded", function () {
  // PhotoSlider Component
  const photoSlider = document.getElementById("photoSlider");
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo10.jpg",
  ];

  // Function to preload images
  const preloadImages = () => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  let currentPhotoIndex = 0;

  const updateSlider = () => {
    photoSlider.innerHTML = `
        <div class="slide">
          <img src="${photos[currentPhotoIndex]}" alt="Photo ${
      currentPhotoIndex + 1
    }">
          <div class="slide-overlay">
            <p class="slide-text">
              <span class="challenge-text">ARE YOU READY FOR THE NEXT CHALLENGE?</span><br>
              <span class="date-text">June 2-8, 2024</span>
            </p>
            <button class="slide-button">REGISTER NOW!</button>
          </div>
        </div>
      `;
  };

  preloadImages(); // Preload images when the page loads
  updateSlider();

  setInterval(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateSlider();
  }, 3000);
});
