gsap.registerPlugin(ScrollTrigger);




// Ensure the button is fully visible on page load
// gsap.set(".asb19__site--back", { opacity: 1, scale: 1 });

// gsap.to(".asb19__site--back", {
//   opacity: 0,
//   scale: 0,
//   duration: 0.2, 
//   scrollTrigger: {
//     trigger: ".asb19__footer--wrap",
//     start: "top bottom-=100vh", // Disappear 50px before footer-wrap appears
//     end: "top center",
//     // scrub: true,
//     toggleActions: "play none none reverse", // Ensures it reappears when scrolling back up
//   },
// });

const cursor = document.querySelector(".cursor");
        const cursorText = cursor.querySelector("span");
        const follower = document.querySelector(".cursor__follower");

        // Function to update cursor text with fade-in effect
        function updateCursorText(text) {
            gsap.to(cursorText, { opacity: 0, duration: 0.1, onComplete: () => {
                cursorText.textContent = text;
                gsap.to(cursorText, { opacity: 1, duration: 0.2 });
            }});
        }

        // Make both cursor and follower follow the mouse
        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3, // Lags slightly for smooth effect
                ease: "power3.out"
            });
        });

        // Link hover effects
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("mouseenter", () => {
                const isView = link.classList.contains("view__link");
                gsap.to(cursor, { scale: isView ? 10 : 4 });
                gsap.to(follower, { scale: isView ? 4 : 2 });
                updateCursorText(isView ? "View" : "");
            });

            link.addEventListener("mouseleave", () => {
                gsap.to(cursor, { scale: 1 });
                gsap.to(follower, { scale: 1 });
                updateCursorText("");
            });
        });

        // Swiper hover effect (Fixed)
        document.querySelectorAll(".swiper").forEach(swiper =>{
          
          swiper.addEventListener("mouseenter", () => {
              gsap.to(cursor, { scale: 10 });
              gsap.to(follower, { scale: 4 });
              updateCursorText("Drag");
                cursor.classList.add("drag");
          });
  
          swiper.addEventListener("mouseleave", () => {
              gsap.to(cursor, { scale: 1 });
              gsap.to(follower, { scale: 1 });
              updateCursorText("");
              cursor.classList.remove("drag");
          });

        })
        // if (swiper) {
        // }

        // Heading hover effect
        document.querySelectorAll(".asb19__heading").forEach(heading => {
            heading.addEventListener("mouseenter", () => {
                const text = heading.getAttribute("data-string");
                gsap.to(cursor, { scale: 10 });
                gsap.to(follower, { scale: 4 });
                updateCursorText(text);
            });

            heading.addEventListener("mouseleave", () => {
                gsap.to(cursor, { scale: 1 });
                gsap.to(follower, { scale: 1 });
                updateCursorText("");
            });
        });

gsap.set(".asb19__site--back", { opacity: 1, scale: 1 });

  gsap.to(".asb19__site--back", {
    opacity: 0,
    scale: 0,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".asb19__footer",
      start: "top bottom-=300px", // 50px before footer-wrap enters view
      end: "top center",
      scrub: 0.2,
      toggleActions: "play none none reverse",
    },
  });

  function updateProgress() {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scrollTop / docHeight) * 283;
    document.querySelector(".progress-bar").style.strokeDashoffset = 283 - progress;
  }

  window.addEventListener("scroll", updateProgress);
  updateProgress();

  document.querySelector(".asb19__site--backToTop").addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.out" });
  });


// console.log(left);
function setupGSAPAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.globalTimeline.clear();

  if (window.innerWidth > 991) {
    // gsap.to("section[class^='asb19__']", {
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "body",
    //     start: "top top",
    //     end: "bottom true",
    //     scrub: true,
    //   },
    // });

    // gsap.utils.toArray(".asb19__marquee").forEach((section) => {
    //   const marquee1 = section.querySelector(".marquee-1");
    //   const clone = marquee1.cloneNode(true);
    //   section.appendChild(clone);
    
    //   const marqueeWrapper = gsap.utils.toArray([marquee1, clone]);
    
    //   gsap.set(marqueeWrapper, { xPercent: 0 });
    
    //   gsap.to(marqueeWrapper, {
    //     xPercent: -100,
    //     duration: 10, // Adjust speed as needed
    //     ease: "linear",
    //     repeat: -1, // Infinite loop
    //     modifiers: {
    //       xPercent: gsap.utils.wrap(-100, 0), // Creates the infinite loop effect
    //     },
    //   });
    // });
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray(".asb19__marquee").forEach((section) => {
    //   const marquee = section.querySelector(".marquee-1");
    //   const marqueeWidth = marquee.scrollWidth; // Get total width of marquee content
    
    //   // Duplicate content to ensure seamless looping
    //   marquee.innerHTML += marquee.innerHTML;
    
    //   gsap.set(marquee, { x: 0 });
    
    //   const marqueeAnim = gsap.to(marquee, {
    //     x: -marqueeWidth / 2, // Move left infinitely
    //     duration: 10, // Adjust speed
    //     ease: "linear",
    //     repeat: -1,
    //     modifiers: {
    //       x: gsap.utils.wrap(-marqueeWidth / 2, 0), // Seamless looping
    //     },
    //   });
    
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 1,
    //     onUpdate: (self) => {
    //       marqueeAnim.timeScale(1 + self.progress * 2); // Adjust speed dynamically
    //     },
    //   });
    // });


    var colors = ["#fff"];

//initially colorize each box and position in a row
// gsap.set(".box", {
//   backgroundColor: (i) => colors[i % colors.length],
//   x: (i) => i * 50
// });


// gsap.to(".box", {
//   duration: 5,
//   ease: "none",
//   x: "+=500", //move each box 500px to right
//   modifiers: {
//     x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
//   },
//   repeat: -1
// });
    
    const init = () => {
      const marquee = document.querySelectorAll('.asb19__marquee')
      
      if(!marquee) return
    
      marquee.forEach(item => {
        const marqueeInner = item.querySelector('.asb19__marquee--wrap')
        const marqueeContent = marqueeInner.querySelector('.asb19__marquee--content')
        
        // Duration
        const duration = item.getAttribute('data-marquee-duration')
        
        // Element Clone
        const marqueeContentClone = marqueeContent.cloneNode(true)
        marqueeInner.append(marqueeContentClone)
        
        // Marquee animation
        const marqueeContentAll = marqueeInner.querySelectorAll('.asb19__marquee--content')
        marqueeContentAll.forEach(element => {
          gsap.to(element, {
              x: "-101%",
              repeat: -1,
              duration: duration,
              ease: 'linear'
          })
        })
      })
    }
    
    document.addEventListener('DOMContentLoaded', init)
    

    gsap.utils.toArray(".stir-elem .stir img").forEach((stirImg) => {
      gsap.to(stirImg, {
        rotation: -15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: stirImg,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".asb19__img-parallax").forEach((wrapper) => {
      gsap.fromTo(
        wrapper,
        { y: "-30px" },
        {
          y: "30px",
          scrollTrigger: {
            trigger: wrapper,
            scrub: true,
            start: "top bottom", // Start when the section enters the viewport
            end: "bottom top", // End when the section leaves the viewport
            snap: {
              snapTo: 0.5, // Smooth snapping for a seamless effect
              duration: 1,
              ease: "power4.inOut",
            },
          },
          ease: "none",
        }
      );
    });

    gsap.utils.toArray(".asb19__element img").forEach((elem, i) => {
      let speed = elem.dataset.speed || (1 + i * 0.2); // Unique speed per image

      gsap.fromTo(
        elem,
        { yPercent: 40 * speed },  // Each image starts at a different position
        {
          yPercent: 0,  // Moves to neutral position independently
          rotation: -15,
          duration: 4,
          ease: "back",  // Subtle bounce
          scrollTrigger: {
            trigger: elem,  // Each image has its own trigger
            start: "top 100%",  // Begins animation as each enters viewport
            end: "top 20%",
            scrub: true,  // Smooth continuous animation
          },
        }
      );
    });

    // const rightColumn = document.querySelector(".asb19__product-info-right");
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".asb19__product-info",
    //     markers: true,
    //     start: "0 0",
    //     end: "+=2000",
    //     pin: true,
    //     scrub: true
    //   }
    // });
    
    // tl.to(rightColumn, {
    //   y: window.innerHeight - rightColumn.scrollHeight,
    //   ease: "none"
    // });



    // Select elements
  

  // gsap.to(".asb19__img img", {
  //   scale: 1.3, // Scale up to 1.3x
  //   duration: 1,
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".asb19__product-collection",
  //     start: "top center", // Animation starts when the top of the section reaches the center of viewport
  //     end: "bottom top", // Animation ends when bottom of section reaches top of viewport
  //     scrub: 1 // Smooth scrub effect
  //   }
  // });
  gsap.utils.toArray(".asb19__media-scale > *").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 0.4 }, // Start small
      {
        scale: 1.1, // Scale up
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".asb19__media-scale",
          start: "top center",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  });


  gsap.utils.toArray(".asb19__process-single").forEach((item, index) => {
    const isEven = index % 2 !== 0; // Check if the index is even (odd in zero-based indexing)
    const left = item.querySelector(".asb19__process-left");
    const right = item.querySelector(".asb19__process-right");
    
    // Slide-in animation
    gsap.fromTo(left, 
    { scale: 0.9,autoAlpha: 0, opacity: 0, x: isEven ? 80 : -80 }, 
    { scale: 1,autoAlpha: 1, opacity: 1, x: 0, duration: 1.25, ease: "back",
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    gsap.fromTo(right, 
    { scale: 0.9, opacity: 0, x: isEven ? -80 : 80 }, 
    { scale: 1, opacity: 1, x: 0, duration: 1.25, ease: "back",
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    // Parallax effect on images
    gsap.to(item.querySelectorAll(".asb19__process-single > [class^='asb19__process-']"), {
      y: -50, // Adjust for more/less movement
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      }
    });
});
    // 02. Reveal Up: any element
    gsap.utils.toArray(".asb19__reveal-up > *").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom 20%",
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
      });
    });

    // 03. Reveal Images Left or Right: only images
    let revealContainers = document.querySelectorAll(".abin__img-reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let isFromRight = container.classList.contains("reveal-right");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play reset play reset"
        }
      });

      tl.set(container, { autoAlpha: 1 });
      if (isFromRight) {
        tl.from(container, 1.5, {
          xPercent: 100,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
        });
      } else {
        tl.from(container, 1.5, {
          xPercent: -100,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });

    // 04. Slide Up or Slide In Text: only p tags
    function createScrollTrigger(triggerElement, timeline) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%",
        onEnter: () => timeline.play()
      });
    }


    // let lettersSlideUp = document.querySelectorAll(".letters-slide-up p");
    // lettersSlideUp.forEach(function (paragraph) {
    //   let tl = gsap.timeline({ paused: true });
    //   let words = new SplitType(paragraph, { types: "words, chars", tagName: "span" });
    //   tl.from(paragraph.querySelectorAll(".word"), { 
    //     yPercent: 100, 
    //     duration: 0.2, 
    //     ease: "power1.out", 
    //     stagger: { amount: 0.6 } 
    //   });
    //   createScrollTrigger(paragraph, tl);
    // })
        

    let wordsSlideRight = document.querySelectorAll(".words-slide-from-right p");
    wordsSlideRight.forEach(function (paragraph) {
      let tl = gsap.timeline({ paused: true });
      let words = new SplitType(paragraph, { types: "words, chars", tagName: "span" });
      tl.from(paragraph.querySelectorAll(".word"), {
        opacity: 0,
        x: "1em",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger(paragraph, tl);
    });
    let wordsSlideUp = document.querySelectorAll(".words-slide-up p, .words-slide-up > *");
    wordsSlideUp.forEach(function (paragraph) {
      let tl = gsap.timeline({ paused: true });
      let words = new SplitType(paragraph, { types: "words, chars", tagName: "span" });
      tl.from(paragraph.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.3 }
      });
      createScrollTrigger(paragraph, tl);
    });

  }
}
setupGSAPAnimations();
window.addEventListener("resize", setupGSAPAnimations);

// MAIN: Lenis Initialization
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll(".ukiyo");
  els.forEach((el) => {
    const parallax = new Ukiyo(el);
  });
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});