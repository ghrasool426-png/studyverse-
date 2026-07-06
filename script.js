/* ==========================================
   APNA KASHMIR - SCRIPT.JS
========================================== */

console.log("Apna Kashmir Loaded Successfully");

// Current Year (Future Use)
const currentYear = new Date().getFullYear();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Newsletter Form
const form = document.querySelector(".newsletter form");

if(form){
    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if(email === ""){
            alert("Please enter your email.");
            return;
        }

        alert("Thank you for subscribing to Apna Kashmir!");

        this.reset();

    });
}
