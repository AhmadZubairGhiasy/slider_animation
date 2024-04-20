
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");


slide1.addEventListener("click", ()=>{
    slide1.style.transform = "translateX(0%)"
    slide2.style.transform = "translateX(180%)"
    slide3.style.transform = "translateX(470%)"
    slide4.style.transform = "translateX(-400%)"
    slide5.style.transform = "translateX(-150%)"
    slide1.style.scale = "100%"
    slide2.style.scale = "80%"
    slide3.style.scale = "60%"
    slide4.style.scale = "60%"
    slide5.style.scale = "80%"
    slide1.style.zIndex = "10"
    slide2.style.zIndex = "5"
    slide3.style.zIndex = "1"
    slide4.style.zIndex = "1"
    slide5.style.zIndex = "5"
    
})

slide2.addEventListener("click", ()=>{
    slide2.style.transform = "translateX(0%)"
    slide3.style.transform = "translateX(180%)"
    slide4.style.transform = "translateX(470%)"
    slide5.style.transform = "translateX(-400%)"
    slide1.style.transform = "translateX(-150%)"
    slide2.style.scale = "100%"
    slide3.style.scale = "80%"
    slide4.style.scale = "60%"
    slide5.style.scale = "60%"
    slide1.style.scale = "80%"
    slide2.style.zIndex = "10"
    slide3.style.zIndex = "5"
    slide4.style.zIndex = "1"
    slide5.style.zIndex = "1"
    slide1.style.zIndex = "5"
    
    

})

slide3.addEventListener("click", ()=>{
    slide3.style.transform = "translateX(0%)"
    slide4.style.transform = "translateX(180%)"
    slide5.style.transform = "translateX(470%)"
    slide1.style.transform = "translateX(-400%)"
    slide2.style.transform = "translateX(-150%)"
    slide3.style.scale = "100%"
    slide4.style.scale = "80%"
    slide5.style.scale = "60%"
    slide1.style.scale = "60%"
    slide2.style.scale = "80%"
    slide3.style.zIndex = "10"
    slide4.style.zIndex = "5"
    slide5.style.zIndex = "1"
    slide1.style.zIndex = "1"
    slide2.style.zIndex = "5" 

})

slide4.addEventListener("click", ()=>{
    slide4.style.transform = "translateX(0%)"
    slide5.style.transform = "translateX(180%)"
    slide1.style.transform = "translateX(470%)"
    slide2.style.transform = "translateX(-400%)"
    slide3.style.transform = "translateX(-150%)"
    slide4.style.scale = "100%"
    slide5.style.scale = "80%"
    slide1.style.scale = "60%"
    slide2.style.scale = "60%"
    slide3.style.scale = "80%"
    slide4.style.zIndex = "10"
    slide5.style.zIndex = "5"
    slide1.style.zIndex = "1"
    slide2.style.zIndex = "1"
    slide3.style.zIndex = "5"
    

})

slide5.addEventListener("click", ()=>{
    slide5.style.transform = "translateX(0%)"
    slide1.style.transform = "translateX(180%)"
    slide2.style.transform = "translateX(470%)"
    slide3.style.transform = "translateX(-400%)"
    slide4.style.transform = "translateX(-150%)"
    slide5.style.scale = "100%"
    slide1.style.scale = "80%"
    slide2.style.scale = "60%"
    slide3.style.scale = "60%"
    slide4.style.scale = "80%"
    slide5.style.zIndex = "10"
    slide1.style.zIndex = "5"
    slide2.style.zIndex = "1"
    slide3.style.zIndex = "1"
    slide4.style.zIndex = "5"
})
