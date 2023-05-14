const sectionHeroEl = document.querySelector(".special-cart");
const cta = document.querySelector(".cta");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      cta.style.display = "flex";
    }

    if (ent.isIntersecting === true) {
      cta.style.display = "none";
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
