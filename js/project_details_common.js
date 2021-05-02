$(document).ready(function(){
  
  // Fade Options
  const appearOptions = {
      threshold: 1.0,    // Only fade once 100% visible
      rootMargin : "0px 0px -6% 0px"
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
        entry.target.children[0].children[1].classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, appearOptions);
  // Observe all the Elements that want to fade in
  // Project Details
  appearOnScroll.observe(document.querySelector(".proj-about"));
  appearOnScroll.observe(document.querySelector(".proj-respon"));
  appearOnScroll.observe(document.querySelector(".proj-misc"));

  // Scroll back up
  var backTopButton = $(".back-top-button");
  backTopButton.click(function(event){
    event.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

});