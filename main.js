const btnTitle = document.querySelector('#btn-title');
const title = document.querySelector("#title");
const home = document.querySelector('#btn-home');
const row = document.querySelector("#row");
const presentation = document.querySelector("#presentation");
const image = document.querySelector("#image");

btnTitle.addEventListener('click', () => {
    title.style.display = 'none';
    presentation.style.display = 'block';
    row.style.display = 'none';
    image.style.height = "100vh";
})

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");

const mobileLinks = document.querySelector(".menu-mobile li");


menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block"; 
    closeBtn.style.color = 'white';      
    menuMobile.classList.add('active');


})

closeBtn.addEventListener("click", () => {
    menuMobile.classList.remove('active');
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";    

})

mobileLinks.forEach(link => (link.addEventListener("click", () => {
    menuMobile.classList.remove('active');
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";  
})))


