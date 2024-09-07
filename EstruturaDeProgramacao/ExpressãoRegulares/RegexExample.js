const reg1 = new RegExp('bola')
console.log(reg1.test("tem bola"))
console.log(reg1.test("nao tem"))
const reg2 = /bola/
console.log(reg2.test("tem bola"))
console.log(reg2.test("nao tem"))
let text = "bola"
console.log(reg2.test(text))
console.log(/teste/.test("teste"))