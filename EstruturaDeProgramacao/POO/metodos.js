const cachorro ={
    raca:"",
    uivar:function(){
        console.log("uivando")
    },
    rosnar:function(){
        console.log("rosnando")
    },
    setRaca:function(raca = "não definada"){
        this.raca = raca
    }
}
cachorro.rosnar()
cachorro.uivar()
console.log(cachorro.raca)
cachorro.setRaca("labrador")
console.log(cachorro.raca)