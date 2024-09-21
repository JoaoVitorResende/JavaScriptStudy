let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
function message(){
    console.log("clicou em mim");
}
btn1.addEventListener("click", message);
btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", message);
});