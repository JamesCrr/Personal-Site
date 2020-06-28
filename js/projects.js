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

  // On Hover Project Cards
  // Hover Project Image
  $(".proj-card").on("mouseover", function(){
    $(this).css({"cursor":"pointer"});
    $(this).children(".proj-img-container").children("a").children(".proj-img").css({"transform":"scale(1.2)"});
    $(this).children(".proj-name").children("a").css({"color":"var(--nav-hover-color)"});
  }).on("mouseout", function(){
    $(this).css({"cursor":"default"});
    $(this).children(".proj-img-container").children("a").children(".proj-img").css({"transform":"scale(1.0)"});
    $(this).children(".proj-name").children("a").css({"color":"white"});
  }).on("touchstart", function(){
    $(this).css({"cursor":"pointer"});
    $(this).children(".proj-img-container").children("a").children(".proj-img").css({"transform":"scale(1.2)"});
    $(this).children(".proj-name").children("a").css({"color":"var(--nav-hover-color)"});
  }).on("touchend", function(){
    $(this).css({"cursor":"default"});
    $(this).children(".proj-img-container").children("a").children(".proj-img").css({"transform":"scale(1.0)"});
    $(this).children(".proj-name").children("a").css({"color":"white"});
  });;
  
});