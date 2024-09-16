function* CriadorDeID()
{
    let id = 0
    while(true){
        yield id++
    }
}
let criarID = CriadorDeID()
console.log(criarID.next().value)
console.log(criarID.next().value)