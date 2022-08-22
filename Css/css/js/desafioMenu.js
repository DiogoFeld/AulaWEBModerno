window.onhashchange = function(e){
    const oldUrl = e.oldURL.split("#")[1];
    const newURL = e.newURL.split("#")[1];


    const oldMenu = document.querySelector(`.menu a[href='#${oldUrl}']`)
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)

    console.log(newMenu.parentElement);
    oldMenu.parentElement.classList.remove("selected");
    newMenu.parentElement.classList.add("selected");
}