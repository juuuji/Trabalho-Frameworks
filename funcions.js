function rolarVelas(){
    document.getElementById("velas").scrollIntoView();
}

function rolarSobreNos(){
    document.getElementById("sobreNos").scrollIntoView();
}


window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
});