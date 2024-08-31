function Cachorro(raca,patas,cor)
{
    this.raca = raca
    this.patas = patas
    this.cor = cor
}
Cachorro.prototype.uivar = function()
{
    console.log("Uivando")
}
let pastorAlemao = new Cachorro("pastor alemão",4,"padrão")
pastorAlemao.uivar()

