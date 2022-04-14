function showText (elem) {
    if (elem.previousElementSibling.clientHeight === 80) {
        elem.previousElementSibling.style.height = '100%'; 
        elem.innerHTML = "Show Less..."; 
    } else {
        elem.previousElementSibling.style.height = '80px'; 
        elem.innerHTML = "Read more"; 
    }
}; 

let id = document.getElementById("test"); 
let className = document.getElementsByClassName("test");  
let tag = document.getElementsByTagName("test");  
 


