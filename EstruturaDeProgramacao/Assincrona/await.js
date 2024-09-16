function SomaComDelay(a,b)
{
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a+b)
        }, 4000)
    })
}

async function ResultadoDaSoma(a,b,c)
{
    let x = SomaComDelay(a,b)
    let y = c
    return await x+y;
}
ResultadoDaSoma(1,2,3).then(values => console.log(values))