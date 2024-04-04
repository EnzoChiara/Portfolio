
    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    const navLink = document.querySelectorAll('.nav-link');
    

    hamburguer.addEventListener("click", menuHamb);

   
    function menuHamb() {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    if(window.scrollY > 0){
        header.classList.add("scrolled)");
        header.style.backgroundColor = "#45718C ";
        header.style.height = "14%";
        header.style.borderBottom = "1px solid #689BA6";
    }
    else{
        header.classList.remove("scrolled");
        header.style.backgroundColor = "#1A2A40";
        header.style.height = "15%";
        header.style.borderBottom = "";
    }
    
});



   

