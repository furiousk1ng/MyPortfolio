const btnDarkMode = document.querySelector(".dark-mode-btn");

if(localStorage.getItem("darkMode") === "dark"){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} 

if (window.matchMedia("(prefers-color-scheme: dark)").matches && window.matchMedia) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}


btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

    if(isDark) {
    localStorage.setItem('darkMode', 'dark');
    }
    else
    {
        localStorage.setItem('darkMode', 'light');
    }

};


