function VerifyNumber(num)
{
    return new Promise((resolve, reject) =>{
        if(num == 2)
        {
            resolve( console.log(`o numero é ${num} `))
        }
        else
        {
            reject(new Error("Falhou"))
        }
    });
}
VerifyNumber(2)
VerifyNumber(3)