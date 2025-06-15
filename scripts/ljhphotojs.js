        //Nav JavaScript
            function openNav() {
                document.getElementById("navigationpanel").style.width = "100%";
            }
            function closeNav() {
            document.getElementById("navigationpanel").style.width = "0";
            }

        //Slideshow JavaScript
           document.addEventListener("DOMContentLoaded", function () {
  const slides = document.getElementsByClassName("slideimages");
  const dots = document.getElementsByClassName("dot");

  // Only run slideshow if there is at least one slide and dot
  if (slides.length === 0 || dots.length === 0) {
    return; // Exit early, no slideshow here
  }

  let slideIndex = 1;
  let slideTimer;

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";

    slideTimer = setTimeout(() => showSlides(++slideIndex), 5000);
  }

  // Initial call
  showSlides(slideIndex);

  // Expose controls globally (if needed)
  window.plusSlides = function(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
  }
});



                 //Gallery Cover Hover
document.addEventListener("DOMContentLoaded", function () {

        const galleryLinkNewborn = document.querySelector('.newborn a');
        const galleryLinkCouples = document.querySelector('.couples a');
        const galleryLinkSolo = document.querySelector('.solo a');
        const galleryLinkFamily = document.querySelector('.family a');

    //Mouse enter & mouse out events

        galleryLinkNewborn.addEventListener('mouseenter', function(event){
   
            galleryLinkNewborn.innerHTML = "View Gallery";
        
        });

        galleryLinkNewborn.addEventListener('mouseout', function(event){
   
            galleryLinkNewborn.innerHTML = "Newborns";
        
        });

        galleryLinkCouples.addEventListener('mouseenter', function(event){
   
            galleryLinkCouples.innerHTML = "View Gallery";
        
        });

        galleryLinkCouples.addEventListener('mouseout', function(event){
   
            galleryLinkCouples.innerHTML = "Couples & Engagements";
        
        });

          galleryLinkSolo.addEventListener('mouseenter', function(event){
   
            galleryLinkSolo.innerHTML = "View Gallery";
        
        });

        galleryLinkSolo.addEventListener('mouseout', function(event){
   
            galleryLinkSolo.innerHTML = "Solo Portraits";
        
        });

        galleryLinkFamily.addEventListener('mouseenter', function(event){
   
            galleryLinkFamily.innerHTML = "View Gallery";
        
        });

        galleryLinkFamily.addEventListener('mouseout', function(event){
   
            galleryLinkFamily.innerHTML = "Family Portraits";
        
        });
});

// FAQ Dropdown Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Hide all answers initially
  document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.height = '0';
    answer.style.padding = '0';
  });

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const currentItem = question.parentElement;
      const answer = currentItem.querySelector('.faq-answer');
      const isOpen = currentItem.classList.contains('active');
      const faqTopic = currentItem.parentElement;

      // Close all other faq items in this topic
      faqTopic.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
          const otherAnswer = item.querySelector('.faq-answer');
          otherAnswer.style.height = '0';
          otherAnswer.style.padding = '0';
        }
      });

      if (!isOpen) {
        currentItem.classList.add('active');

        // Temporarily set height to auto to get scrollHeight
        answer.style.height = 'auto';
        const height = answer.scrollHeight;
        answer.style.height = '0';  // reset to 0 before animation

        // Force reflow
        answer.offsetHeight;

        // Animate height
        answer.style.height = height + 'px';
        answer.style.padding = '0.5rem 0';

        setTimeout(() => {
          if (currentItem.classList.contains('active')) {
            answer.style.height = 'auto';
          }
        }, 300);
      } else {
        currentItem.classList.remove('active');
        answer.style.height = '0';
        answer.style.padding = '0';
      }
    });
  });
});





        