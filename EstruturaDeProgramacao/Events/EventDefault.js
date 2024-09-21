let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let p = document.querySelector("p")
let a = document.querySelector("a")
function message(e){
    console.log("clicou em mim");
    e.stopPropagation()
}
btn1.addEventListener("click", message);
btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", message);
});
p.addEventListener("click", function(){
    console.log("clicou no paragrafo")
})
a.addEventListener("click", function(e){
    e.preventDefault()
    console.log("não vai mudar de link")
})
    