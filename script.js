var btn = document.getElementById("btn1");
var closeBtn= document.getElementById("cls");
btn.addEventListener("click",function(){
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.top = "0";
});

closeBtn.addEventListener("click",function(){
    document.getElementById("nav").style.width = "0%";
})