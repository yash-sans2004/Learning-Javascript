// // Primitive datatypes in JS
// let a = null;
// let b = 345;
// let c = true;
// let d = BigInt(345) + BigInt(5);
// let e = "Yash"
// let f = Symbol("My name is yash")
// let g = undefined

// console.log(a, b, c, d, e, f, g);
// console.log(typeof b)

// // Objects in JS
// const item = {
//     "Yash":"Purwar",
//     "Gender":"Male",
//     "College":"SRMIST"
// }

// console.log(item["Yash"])

// function myfun(x,y,z){
//     console.log("Hello World");
//     return x+y+z;
// }

// let a=1;
// let b=5;
// let c=4;
// console.log(myfun(a,b,c))

const hello = () => {
    console.log("I am fine");
    return "hi";
}

let v = hello();
console.log(v);