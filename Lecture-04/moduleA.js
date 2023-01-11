// module "moduleA.js"
export default function cube(x) {
    return x * x * x;
}

//In main.js
import { cube } from "./moduleA.js";
// Now the `cube` funtion can be used straightforwardly.
console.log(cube(3)); //27