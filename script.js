const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const links = nav.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "2s ease";
    setTimeout(() => loader.remove(), 500);
  });


function type() {
    typed = new Typed('.multiple-text', {
        strings: ["Avicenne Consulting"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })
}




function controles() {
    nom=document.getElementById("name").value;
    email=document.getElementById("email").value;
    message=document.getElementById("message").value;
    popup1=document.getElementById("popup1");
    popup2=document.getElementById("popup2");
    if(nom.length<5 || nom.indexOf(" ")== -1){
        popup1.classList.add("open-popup");
        document.getElementById("page-content").classList.add("blur");
        return false;
    }else if(email.indexOf("@")== -1 || email.indexOf(".")== -1){
        document.getElementById("popup-txt").textContent = "Veuillez entrer une adresse e-mail valide.";
        popup1.classList.add("open-popup");
        document.getElementById("page-content").classList.add("blur");
        return false;
    }else if(message==""){
        document.getElementById("popup-txt").textContent = "Veuillez entrer un message.";
        popup1.classList.add("open-popup");
        document.getElementById("page-content").classList.add("blur");
        return false;
    }else{
        popup2.classList.add("open-popup");
        document.getElementById("page-content").classList.add("blur");
        return true;
    }
}
function closePopup(id) {
    document.getElementById(id).classList.remove("open-popup");
    document.getElementById("page-content").classList.remove("blur");
}