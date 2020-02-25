var method = require('./methods')
//import {sayHello, userHello} from "./methods.js";

method.sayHello()
.then(val=>console.log(val))
.catch(val=>console.log(val))
method.userHello("pavan")
.then(val=>console.log(val))
.catch(val=>console.log("error",val))


