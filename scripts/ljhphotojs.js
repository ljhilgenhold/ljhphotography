        //Nav JavaScript
            function openNav() {
                document.getElementById("navigationpanel").style.width = "100%";
            }
            function closeNav() {
            document.getElementById("navigationpanel").style.width = "0";
            }

        //Slideshow JavaScript
           (function () {
  let slideIndex = 1;
  let slideTimer;

  showSlides(slideIndex);

  // Expose these globally so HTML can call them
  window.plusSlides = function(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slideimages");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slideTimer = setTimeout(() => showSlides(++slideIndex), 5000);
  }
})();



                 //Gallery Cover Hover
document.addEventListener("DOMContentLoaded", function () {

        const galleryLinkNewborn = document.querySelector('.newborn');
        const galleryLinkCouples = document.querySelector('.couples');
        const galleryLinkSolo = document.querySelector('.solo');
        const galleryLinkFamily = document.querySelector('.family');

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
        