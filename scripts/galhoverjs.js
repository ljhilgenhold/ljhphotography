          //Nav JavaScript
          function openNav() {
            document.getElementById("navigationpanel").style.width = "100%";
        }
        function closeNav() {
        document.getElementById("navigationpanel").style.width = "0";
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
 
         