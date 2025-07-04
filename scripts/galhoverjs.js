          //Nav JavaScript
          function openNav() {
            document.getElementById("navigationpanel").style.width = "100%";
        }
        function closeNav() {
        document.getElementById("navigationpanel").style.width = "0";
        }
    
         
         //Gallery Cover Hover
         const galleryLinkNewborn = document.querySelector('.newborn a');
         const galleryLinkCouples = document.querySelector('.couples a');
         const galleryLinkWeddings = document.querySelector('.weddings a');
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
    
             galleryLinkCouples.innerHTML = "Couples";
         
         });

         galleryLinkWeddings.addEventListener('mouseenter', function(event){
    
             galleryLinkWeddings.innerHTML = "View Gallery";
         
         });
 
         galleryLinkWeddings.addEventListener('mouseout', function(event){
    
             galleryLinkWeddings.innerHTML = "Weddings & Engagements";
         
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
 
         