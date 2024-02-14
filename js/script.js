document.addEventListener("DOMContentLoaded", (e) =>{

    let hamburgerCnt = document.getElementsByClassName("hamburger-cnt");

    hamburgerCnt[0].addEventListener("click", (e) => {
      
    let lines = hamburgerCnt[0].children;
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("clicked");
    }
    
    document.getElementById("toglemenu").classList.toggle("clicked");
    });
    
});




