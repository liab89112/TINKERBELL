function openGift(){
    document.getElementById("welcome").style.display="none";
    document.getElementById("letterSection").classList.remove("hidden");
}

function openLetter(){
    document.querySelector(".envelope").classList.toggle("open");
}