

//Portfolio section - Modal

// const portfolioModals = document.querySelectorAll(".portfolio-model");
// const imgCards = document.querySelectorAll(".img-card");
// const porftolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// var portfolioModal = function (modalClick){
//     portfolioModals[modalClick].classList.add("active");
// }

// imgCards.forEach((imgCard, i) => {
//     imgCard.addEventListener("click", ()=>{
//         portfolioModal(i);
//     });
// });

// porftolioCloseBtns.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         portfolioModals.forEach((modal)=>{
//             modal.classList.remove("active");
//         });
//     });
// });

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

const scrollBtn = document.querySelector(".scroll-to-top-btn");
window.addEventListener("scroll", ()=>{
    scrollBtn.classList.toggle("active", window.scrollY > 500);
})

scrollBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Navigation menu items active on page scroll

window.addEventListener("scroll", ()=> {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(current => {
        let height = current.offsetHeight;
        let top = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > top && scrollY <= top + height){

            document.querySelector(".nav-items a[href*="+id+"]").classList.add("active");
        }
 
        else{

            document.querySelector(".nav-items a[href*="+id+"]").classList.remove("active");
        }
                
    })


})


//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >  0);
})


//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items");

menuBtn.addEventListener("click", ()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    navigation.classList.remove("active");
    
})

navItems.forEach(item=>{
    item.addEventListener("click", ()=>{
        navigation.classList.remove("active");
        
    })
})


// form

const form  = document.getElementById("form");

const sent  = document.getElementById("sent-modal");
const notSent = document.getElementById("not-sent-modal");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const data = new FormData(form);

    // console.log(data.get("message"));

    fetch("https://api.yunistore.in/public/contact",{
        method: "POST",
        body: data
    }).then(res=>{
        if(res.ok){
            sent.classList.add("active");
            form.reset();
        }
        else{
           notSent.classList.add("active");
        }
    })

});

document.querySelectorAll(".form-modal-close-btn").forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            document.querySelectorAll(".form-modal").forEach(modal=>modal.classList.remove("active"));
        })
})



//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    // reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100,
})
 
//Target elements, and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2", {delay: 300, origin: "left"});
ScrollReveal().reveal(".home .info h3, .home .info p", {delay: 400, origin: "right"});
ScrollReveal().reveal(".home .info .btn" , {delay: 450, origin: "bottom"});
ScrollReveal().reveal(".media-icons i" , {delay: 300, origin: "bottom", interval: 100});
ScrollReveal().reveal(".home-img" , {delay: 300, origin: "bottom"});
// ScrollReveal().reveal(".section-title-01, .section-title-02", {delay: 0, origin: "left"});
// ScrollReveal().reveal(".about-info .btn", {delay: 400, origin: "right"});
// ScrollReveal().reveal(".contact-left li" , {delay: 300, origin: "bottom", interval: 100});
// ScrollReveal().reveal(".about-img" , {delay: 300, origin: "bottom"});
// ScrollReveal().reveal(".about .description, .contact-right" , {delay: 300, origin: "right"});
// ScrollReveal().reveal(".about .professional-list li" , {delay: 300, origin: "right", interval:100});
// ScrollReveal().reveal(".skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2" , {delay: 450, origin: "left"});
// ScrollReveal().reveal(".experience-card, .service-card, .education, .portfolio .img-card" , {delay: 450, origin: "bottom", interval:200});
// ScrollReveal().reveal("footer .group" , {delay:300, origin: "top", interval:200});