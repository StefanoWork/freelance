import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      xPercent: 0,
    })
      .to(
        bannerOne,
        {
          yPercent: -130,
          xPercent: Math.random() * 200 - 100,
          duration: 1,
        },
        0
      )

      .to(
        bannerTwo,
        {
          yPercent: -130,
          xPercent: Math.random() * 200 - 100,
          duration: 2,
        },
        0
      )
      .to(
        bannerThree,
        {
          yPercent: -130,
          xPercent: Math.random() * 200 - 100,
          duration: 3,
        },
        0
      )
      .to(
        bannerFour,
        {
          yPercent: -130,
          xPercent: Math.random() * 200 - 100,
          duration: 4,
        },
        0
      );
  }
};
