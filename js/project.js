
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