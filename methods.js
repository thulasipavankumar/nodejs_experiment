

const sayHello = () => 
    new Promise((res,rej)=>{
        res("Hello");
        return "Hello"
    });


const userHello = (user) => {
   return  sayHello().then(val=>val+" "+user)
}

// module.exports = {
//     sayHello: sayHello,
//     userHello: userHello,
//   };
 exports.sayHello = sayHello;
 exports.userHello = userHello;