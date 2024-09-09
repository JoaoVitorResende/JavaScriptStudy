const reg1 = /[123456]/
console.log(reg1.test("temos o numero 7"))
console.log(reg1.test("temos o numero 2"))
console.log(reg1.test("temos o numero 1"))
const reg2 = /[0-9]/
console.log(reg2.test("temos o numero 2"))
console.log(reg2.test("temos o numero -1"))