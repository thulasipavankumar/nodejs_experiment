const confuse = () => new Promise((resolve, reject) => {
    const retryLogic = (retryCount) => {
        if (retryCount <= 0)
            return reject("Cannot complete the task even after retry")
        else {
            doTheTask()
                .then(resolve)
                .catch(ex => {
                    setTimeout(() => {
                        retryLogic(--retryCount)
                    },(1000)*10) // execute after 10 sec
                });
        }
    }
    retryLogic(5);
});


const greetUser = (username) => Promise.resolve("Hola "+username);
greetUser("pavan kumar ")                  // <--- first promise 
.then(val=>{
    console.log(val)
    return val                             //<---- second promise
}).then(greetUser("tulasi"))
.then(value=>console.log("excepted ",value))    // <------     since 1st promise value is not consumed if will reflect here
