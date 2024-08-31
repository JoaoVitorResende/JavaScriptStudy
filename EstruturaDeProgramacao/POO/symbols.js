class Cachorro
{
    constructor(cor,raca)
    {
        this.raca = raca
        this.cor = cor
    }
    Latir = () => console.log("Uivando")
}

let labrador = new Cachorro("amarelo","labrador")
let patas = Symbol();
Cachorro.prototype.raca = "SRD"
Cachorro.prototype[patas] = 4
console.log(labrador.raca)
console.log(Cachorro.prototype.raca)
console.log(Cachorro.prototype[patas])