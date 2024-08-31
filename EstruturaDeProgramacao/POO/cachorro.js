class Cachorro
{
    cor = ""
    pata = 4
    raca = ""
    constructor(cor,pata,raca)
    {
        this.raca = raca
        this.pata = pata
        this.cor = cor
    }
    Latir = () => console.log("Uivando")
    GetRaca = () => this.raca
    SetRaca = (raca) => this.raca = raca
}