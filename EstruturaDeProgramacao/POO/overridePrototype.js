class Cachorro
{
    constructor(cor,raca)
    {
        this.raca = raca
        this.cor = cor
    }
    Latir = () => console.log("Uivando")
}
Cachorro.prototype.raca = "SRD"
let labrador = new Cachorro("amarelo","labrador")
console.log(labrador.raca)
console.log(Cachorro.prototype.raca)