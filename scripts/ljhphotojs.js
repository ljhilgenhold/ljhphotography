        //Nav JavaScript
            function openNav() {
                document.getElementById("navigationpanel").style.width = "100%";
            }
            function closeNav() {
            document.getElementById("navigationpanel").style.width = "0";
            }
        //Slideshow JavaScript
            let slideIndex = 1;
            showSlides(slideIndex);

            // Next/previous controls
            function plusSlides(n) {
            showSlides(slideIndex += n);
            }

            // Thumbnail image controls
            function currentSlide(n) {
            showSlides(slideIndex = n);
            }


            //Image slides
        
            function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slideimages");
            let dots = document.getElementsByClassName("dot");
             for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            }
            if (slideIndex > slides.length) {slideIndex = 1} 
            if (slideIndex < 1) {slideIndex = slides.length}   
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";

            slideIndex++;
            setTimeout(showSlides, 5000); // Change image every 5 seconds
            }



                 //Gallery Cover Hover
        const galleryLinkNewborn = document.querySelector('.newborn');
        const galleryLinkCouples = document.querySelector('.couples');
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

        galleryLinkFamily.addEventListener('mouseenter', function(event){
   
            galleryLinkFamily.innerHTML = "View Gallery";
        
        });

        galleryLinkFamily.addEventListener('mouseout', function(event){
   
            galleryLinkFamily.innerHTML = "Family Portraits";
        
        });

        