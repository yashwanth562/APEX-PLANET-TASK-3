// Image Carousel
const images = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3"
];
let currentImageIndex = 0;

const carouselImage = document.querySelector(".carousel-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateCarousel() {
  carouselImage.src = images[currentImageIndex];
}

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
});

// Fetch Joke from API
const jokeBtn = document.getElementById("load-joke");
const jokeBox = document.getElementById("joke-box");

jokeBtn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      jokeBox.textContent = data.joke;
    })
    .catch(error => {
      jokeBox.textContent = "Failed to load joke.";
      console.error("Error fetching joke:", error);
    });
});
