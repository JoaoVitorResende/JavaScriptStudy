function CriarCao(raca,patas,cor)
{
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    return cachorro
}

console.log(CriarCao("PastorAlemão",4,"Preto"))