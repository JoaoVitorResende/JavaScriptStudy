let carro = 
{
    portas: 2,
    portaMalas: "2000L",
    motor: "2.0"
}
let adicionais =
{
    tetoSolar: true,
    arCondicionado: true
}
let MakeDebug = (variable) => console.log(variable)
MakeDebug(carro)
Object.assign(carro,adicionais)
MakeDebug(carro)


