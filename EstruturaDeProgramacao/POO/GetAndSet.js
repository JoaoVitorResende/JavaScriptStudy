class Cachorro2
{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    Latir(){
        console.log("Uivando");
    }
    get GetCor(){
        return this.cor;
    }
    set SetCor(cor){
        this.cor = cor;
    }
}
let pastor = new Cachorro2("Pastor Alemão","Sem Cor")
console.log(pastor)
pastor.SetCor = "padrão"
console.log(pastor)
pastor.Latir()
console.log(pastor.GetCor)