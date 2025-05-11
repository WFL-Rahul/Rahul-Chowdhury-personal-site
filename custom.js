let animate = new Typed('#edit', {
    strings: [
        "a Web-Developer",
        "an Engineer",
        "a Tech Enthusiast"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

let animate2 = new Typed('#edit2', {
    strings: [
        "a Web-Developer",
        "an Engineer",
        "a Tech Enthusiast"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
 
  function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read More";
    }
  }




