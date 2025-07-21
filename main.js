const words = [
    "Welcome",
    "to",
    "the",
    "Journey",
    "of",
    "the",
    "Constitution",
    "of",
    "India",
  ];
  const textElement = document.getElementById("animated-text");
  const animationScreen = document.getElementById("animation-screen");
  const videoScreen = document.getElementById("video-screen");
  
  let index = 0;
  
  function showWords() {
    if (index < words.length) {
      textElement.textContent += words[index] + " ";
      index++;
      setTimeout(showWords, 500);
    } else {
      // After animation ends, switch to video screen
      setTimeout(() => {
        animationScreen.classList.add("hidden");
        videoScreen.classList.remove("hidden");
      }, 1000);
    }
  }
  
  // Start animation
  showWords();


// Show the image when the mouse enters the section and hide it when the mouse leaves
document.querySelector(".legislature").addEventListener("mouseenter", function() {
    document.getElementById("legislature-image").style.display = "block"; // Show the image
});

document.querySelector(".legislature").addEventListener("mouseleave", function() {
    document.getElementById("legislature-image").style.display = "none"; // Hide the image
});

document.querySelector(".judiciary").addEventListener("mouseenter", function() {
    document.getElementById("judiciary-image").style.display = "block"; // Show the image
});

document.querySelector(".judiciary").addEventListener("mouseleave", function() {
    document.getElementById("judiciary-image").style.display = "none"; // Hide the image
});

document.querySelector(".executive").addEventListener("mouseenter", function() {
    document.getElementById("executive-image").style.display = "block"; // Show the image
});

document.querySelector(".executive").addEventListener("mouseleave", function() {
    document.getElementById("executive-image").style.display = "none"; // Hide the image
});