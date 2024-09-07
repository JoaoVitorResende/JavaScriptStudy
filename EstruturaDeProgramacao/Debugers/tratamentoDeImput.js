function ChecarNumero(num)
{
    let number = Number(num)
    if(Number.isNaN(number))
    {
        console.log("Por favor passe somente numeros ao programa")
    }
    else
    {
        return number
    }
}

ChecarNumero(4)
ChecarNumero("três")