// Filter for Blog Posts
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });

  // Change active buttons
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });

  // Header Remover on Scroll
  let header = document.querySelector("header");
  let navbarLinks = document.getElementById("navbar").getElementsByTagName("a");

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 100);
    changeNavbarTextColor(header.classList.contains("shadow") ? "#000" : "#FFF");
  });

  // Function to change navbar text color
  function changeNavbarTextColor(color) {
    for (var i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].style.color = color;
    }
  }

  // Smooth Scroll to Anchors
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Nav Bar
  window.onload = function () {
    for (var i = 0; i < navbarLinks.length; i++) {
      if (document.location.href.indexOf(navbarLinks[i].href) >= 0) {
        navbarLinks[i].className = "active";
      }
    }
  };
});
