document.addEventListener("DOMContentLoaded", function () {
  // Navbar animation
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.add("animate");
  }

  console.log("Start");
  // Existing sigil animation code
  const sigils = document.querySelectorAll(".sigils");

  sigils.forEach((sigil) => {
    // Force a reflow by accessing offsetHeight
    sigil.style.display = "none";
    sigil.offsetHeight; // Trigger reflow
    sigil.style.display = "";

    // Reset the animation by removing and re-adding the class
    const path = sigil.contentDocument?.querySelector("#sigil-path");
    if (path) {
      path.style.animation = "none";
      path.offsetHeight; // Trigger reflow
      path.style.animation = "draw 2.5s ease-in-out forwards 0.7s";
    }
    console.log("Done");
  });
});
