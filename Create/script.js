function changeForm(pos) {
    var form = document.getElementsByClassName("formItem");
    var tab = document.getElementsByClassName("tabF");
    for(i=0;i<tab.length;i++) {
        form[i].style.display = "none";
        tab[i].style.background = "#b7e7fd";
        tab[i].style.border = "thin solid black";
        if(i!=0 || i!=tab.length){
            tab[1].style.borderRight = "none";
            tab[1].style.borderLeft = "none";
        }
    }
    form[pos].style.display = "block";
    tab[pos].style.background = "white";
    tab[pos].style.borderBottom = "none";
}