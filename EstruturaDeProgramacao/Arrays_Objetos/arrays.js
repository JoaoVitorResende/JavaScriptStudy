let numbers = [1,2,3,4]
let names = ["joao", "marcelo","ednilson"]
let misturado = [1, "diego", 2, "julia"]
console.log(numbers)
console.log(names)
console.log(misturado)

function PercorrerArray()
{
    for(let i = 0; i < names.length; i++)
        console.log(names[i])
}

PercorrerArray()