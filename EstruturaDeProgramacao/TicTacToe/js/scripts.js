let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer
let player1 = 0
let player2 = 0
let el

for(let i = 0; i < boxes.length; i++)
{
    boxes[i].addEventListener("click", function()
    {
        CheckEl()
        CheckChildOfTheBox(boxes[i])
        CheckWinCondition()
    })
}
function CheckEl()
{
    if(player1 == player2)
    {
        el = ChangeElAtribute(true)
        player1++
        return
    }
    el = ChangeElAtribute(false)
    player2++
}
function ChangeElAtribute(isPLayer1)
{
    if(isPLayer1)
        return x
    return o
}
function CheckChildOfTheBox(box)
{
    if(box.childNodes.length == 0)
    {
        let cloneEl = el.cloneNode(true)
        box.appendChild(cloneEl)
    }
}
function CheckWinCondition()
{
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")
    CheckBlocks(b1,b2,b3)
    CheckBlocks(b4,b5,b6)
    CheckBlocks(b7,b8,b9)
    CheckBlocks(b1,b5,b9)
    CheckBlocks(b3,b5,b7)
    CheckBlocks(b1,b4,b7)
    CheckBlocks(b2,b5,b8)
    CheckBlocks(b3,b6,b9)
}
function CheckBlocks(block1,block2,block3)
{
    if(!CheckIfBlockIsInUse(block1,block2,block3))
        return
    let threeboxes = [block1.childNodes[0].className,block2.childNodes[0].className,block3.childNodes[0].className]
    CheckSameSymbols(threeboxes)
}
function CheckIfBlockIsInUse(block1,block2,block3)
{
    if(block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length)
        return true
    return false
}
function CheckSameSymbols(threeboxes)
{
    let winXCount = 0;
    let winOCount = 0;
    for(let i = 0; i < threeboxes.length; i++)
    {
        if(threeboxes[i] == "x")
            winXCount++
        else
            winOCount++;
    }
    PrintTheWinner(winXCount, winOCount)
}
function PrintTheWinner(winXCount, winOCount)
{
    if(winXCount == 3)
        console.log("X ganhou")
    else if(winOCount == 3)
        console.log("O ganhou")
    else
        CheckAllBoxes()
}
function CheckAllBoxes()
{
    filledBoxes = 0
    for(let i = 0; i < boxes.length; i++)
    {
        if(boxes[i].childNodes[0] != undefined)
            filledBoxes++
    }

    if(filledBoxes == 9)
        console.log("Deu Velha")
}
