class Mamifero
{
    constructor(patas)
    {
        this.patas = patas
    }
    Uivar = () => console.log("Uivando")
}
let coiote = new Mamifero(4);
console.log(coiote.patas)
class Cachorro3 extends Mamifero
{
    constructor(raca,cor){
        super()
        this.raca = raca;
        this.cor = cor;
    }
    Latir(){
        console.log("latindo");
    }
    get GetCor(){
        return this.cor;
    }
    set SetCor(cor){
        this.cor = cor;
    }
}
let pastor = new Cachorro3("Pastor Alemão","Sem Cor")
console.log(pastor)
pastor.SetCor = "padrão"
console.log(pastor)
pastor.Latir()
console.log(pastor.GetCor)
pastor.patas = 3
console.log(pastor.patas)
pastor.Uivar()