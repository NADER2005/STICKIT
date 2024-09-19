const btnToggleDarkMode = document.querySelector("#btnToggleDarkMode");
var { bsTheme } = document.querySelector("html").dataset
btnToggleDarkMode.style.cursor ="pointer" ;
btnToggleDarkMode.addEventListener("click", (e) => { 
    e.preventDefault();
    bsTheme = bsTheme == "light" ? "dark" : "light";
    document.querySelector("html").dataset.bsTheme = bsTheme;
    
    
})