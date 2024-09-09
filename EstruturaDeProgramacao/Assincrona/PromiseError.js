let promiseError = Promise.resolve(new Error("Algo deu errado"))
promiseError.then((value) => console.log(value)).catch(reason => console.log("Erro : "+reason))