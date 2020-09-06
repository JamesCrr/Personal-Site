$(document).ready(function(){
    
  // Fade in Project Cards
  const projectCards = document.querySelectorAll(".proj-card");
  const appearOptions = {
      threshold: 0.8    // Only fade once 80% visible
   };
  const appearOnScroll = new IntersectionObserver
  (function(entries, appearOnScroll) {
    entries.forEach(entry =>{
      // Within the page yet?
      if(!entry.isIntersecting)
        return;
      else{
        // Fade in and stop checking 
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, appearOptions);
  // Observe all the Project Cards
  projectCards.forEach(card =>{
    appearOnScroll.observe(card);
  });
  
});