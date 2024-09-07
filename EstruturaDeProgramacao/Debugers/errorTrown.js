function saudacao(nome)
{
    if(typeof nome!= "string")
    {
        throw new Error("O parametro so aceita string")
    }
    else{
        console.log(`Olá ${nome}`)
    }
}
saudacao("Teste")
saudacao(2)