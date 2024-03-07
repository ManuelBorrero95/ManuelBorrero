document.addEventListener("DOMContentLoaded", (e) =>{

    let hamburgerCnt = document.getElementsByClassName("hamburger-cnt");

    hamburgerCnt[0].addEventListener("click", (e) => {
      
    let lines = hamburgerCnt[0].children;
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("clicked");
    }
    
    document.getElementById("toglemenu").classList.toggle("clicked");
    });
    


    let slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      

      function showSlides(n)
      {
        let i;
        let slides = document.getElementsByName("mySlices");
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1)
        {
            slideIndex = slides.length;
        }
        for(i = 0; i<slides.length;i++)
        {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }

});




