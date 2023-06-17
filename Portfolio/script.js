const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger Animation
      burger.classList.toggle('open');
    });
  };
  
  navSlide();

  // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the necessary elements
  const circleElement = document.querySelector(".intro-image .circle");
  const originalImageElement = document.querySelector(".intro-image .circle img");
  const avatarElement = document.querySelector(".intro-image .circle .avatar");

  // Function to toggle between original image and avatar
  function toggleAvatar() {
    if (originalImageElement.style.display === "none") {
      originalImageElement.style.display = "block";
      avatarElement.style.display = "none";
    } else {
      originalImageElement.style.display = "none";
      avatarElement.style.display = "block";
    }
  }

  // Function to trigger the flip animation
  function triggerFlipAnimation() {
    circleElement.classList.add("flip-animation");
    setTimeout(function () {
      circleElement.classList.remove("flip-animation");
      toggleAvatar();
    }, 300);
  }

  // Trigger the initial flip animation immediately
  triggerFlipAnimation();

  // Continuously trigger the flip animation every 5 seconds
  setInterval(triggerFlipAnimation, 5000);
});

/////////// JS FOR RECEIVING MESSAGES ////////////////////

document.querySelector("section.contact form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);

  // Send data to the server
  fetch("/send-message", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert("Message sent successfully!");
      // Clear the form fields if needed
      event.target.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  });
});

