

const nav = document.querySelector("nav");
window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 60){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});




// Sample data for brands, models, and years
var brands = ["Brand1", "Brand2", "Brand3"];
var models = ["Model1", "Model2", "Model3"];
var years = ["2020", "2021", "2022"];

// Function to populate select options dynamically
function populateSelectOptions(selectElement, optionsArray) {
    var select = document.getElementById(selectElement);
    for (var i = 0; i < optionsArray.length; i++) {
        var option = document.createElement("option");
        option.text = optionsArray[i];
        select.add(option);
    }
}

window.onload = function() {
    // Populate select options on page load
    populateSelectOptions("brandSelect", brands);
    populateSelectOptions("modelSelect", models);
    populateSelectOptions("yearSelect", years);
}




const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
})
const hiddenElements = document.querySelectorAll('.Popular-text');
hiddenElements.forEach((el) => observer.observe(el));




const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show1');
        }
        else{
            entry.target.classList.remove('show1');
        }
    });
})
const hiddenElements1 = document.querySelectorAll('.Review-text');
hiddenElements1.forEach((el) => observer1.observe(el));




const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        }
        else{
            entry.target.classList.remove('show2');
        }
    });
})
const hiddenElements2 = document.querySelectorAll('.newarrival-text');
hiddenElements2.forEach((el) => observer2.observe(el));



// const observer4 = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) =>{
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show4');
//         }
//         else{
//             entry.target.classList.remove('show4');
//         }
//     });
// })
// const hiddenElements4 = document.querySelectorAll('.left-Review');
// hiddenElements4.forEach((el) => observer4.observe(el));



const observer6 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show6');
        }
        else{
            entry.target.classList.remove('show6');
        }
    });
})
const hiddenElements6 = document.querySelectorAll('.ourstory');
hiddenElements6.forEach((el) => observer6.observe(el));


// const observer7 = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) =>{
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show7');
//         }
//         else{
//             entry.target.classList.remove('show7');
//         }
//     });
// })
// const hiddenElements7 = document.querySelectorAll('.popularcards');
// hiddenElements7.forEach((el) => observer7.observe(el));




//home prev next back button


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let homesection = document.querySelector('.homesection');
let listHTML = document.querySelector('.homesection .list');
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents='none';
    prevButton.style.pointerEvents='none';
    homesection.classList.remove('prev','next');
    let items = document.querySelectorAll('.homesection .list .item');
    if (type ==='next'){
        listHTML.appendChild(items[0]);
        homesection.classList.add('next');
    }
    else{
        let positionlast = items.length - 1;
        listHTML.prepend(items[positionlast]);
        homesection.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(()=>{
        nextButton.style.pointerEvents ='auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}
seeMoreButtons.forEach(button =>{
    button.onclick = function(){
        homesection.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    homesection.classList.remove('showDetail');
}





const menuIcon = document.querySelector(".menuicons");
const closeIcon = document.querySelector(".mobilenav-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobilenav-menu-container");
menuIcon.addEventListener("click",() => {
    mobileMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click",() => {
    mobileMenuContainer.classList.remove("active");
});






let scrollContainer2 = document.querySelector(".Right-Review");
let backbtn = document.getElementById("backbtn");
let forwardbtn = document.getElementById("forwardbtn");
forwardbtn.addEventListener("click",()=>{
    scrollContainer2.style.scrollBehavior ="smooth";
    scrollContainer2.scrollLeft +=1100;
});
backbtn.addEventListener("click",()=>{
    
    scrollContainer2.scrollLeft -=1100;
}); 



let scrollContainerphn = document.querySelector(".Right-Review-phone");
let backbtnph = document.getElementById("backbtn-ph");
let forwardbtnph = document.getElementById("forwardbtn-ph");
forwardbtnph.addEventListener("click",()=>{
    scrollContainerphn.style.scrollBehavior ="smooth";
    scrollContainerphn.scrollLeft +=350;
});
backbtnph.addEventListener("click",()=>{
    
    scrollContainerphn.scrollLeft -=350;
});
