let section = document.querySelector("section"),
icons = document.querySelector(".icons");

icons.onclik = ()=>{
    section.classList.toggle("dark");
}