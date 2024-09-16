const p1 = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        resolve(100)
    },5000)
})
const p2 = Promise.resolve(5)
const p3 = new Promise((resolve, reject) => {resolve(10)});
Promise.all([p1,p2,p3]).then((values) => console.log(values))