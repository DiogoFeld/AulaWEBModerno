const colors = {
    p: "#388e3c",
    div: "wheat",
    span: "lightblue",
    il:"firebrick",
    ol:"gold",
    header:"black",
    nav:"#64dd17",
    ul:'#00acc1',
    form:"#9f6581",
    body:"#25b6da",
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll(".tag").forEach(box => {

    const tagName = box.tagName.toLowerCase();
    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains('nolabel')){

        const label = document.createElement("label");        
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName;

        box.insertBefore(label,box.childNodes[0])

        box.appendChild(label);
    }
});