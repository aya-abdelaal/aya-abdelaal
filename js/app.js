window.addEventListener("DOMContentLoaded", () => {
  //onload animation
  const tl = gsap.timeline();
  tl.from("#header-content", {
    scale: 0,
    ease: "back.out(1.7)",
    duration: 2.5,
  })
    .to(".tags", { duration: 1.5, opacity: 1 })
    .to(
      "section",
      {
        duration: 1.5,
        opacity: 1,
        bottom: 0,
        stagger: 1,
      },
      "-=2"
    );

  //show/hide navbar when leaving/entering header
  const navbar = document.getElementById("navbar");
  const navObserver = new IntersectionObserver(
    (entries, navObserver) => {
      for (entry of entries) {
        if (entry.isIntersecting) {
          navbar.style.top = "-70px";
        } else {
          navbar.style.top = "0";
        }
      }
    },
    {
      rootMargin: "-25% 0% 0%",
    }
  );
  navObserver.observe(document.getElementsByTagName("header")[0]);
});
