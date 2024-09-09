let p = Promise.resolve(5);
console.log("teste");
console.log(p);
p.then((value) => {console.log(`o valor é ${value}`)});