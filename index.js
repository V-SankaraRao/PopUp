let popup=document.getElementById("pop");
let hire=document.getElementById("hire");
let ok=document.getElementById("ok");

hire.addEventListener("click", ()=>{
     popup.classList.add("open-popup");
});
ok.addEventListener("click", ()=>{
    popup.classList.remove("open-popup");
});