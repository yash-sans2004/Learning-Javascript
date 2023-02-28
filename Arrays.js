// // Define a Array
// let class_12_marks = [1,2,3,4,5,6]
// console.log(class_12_marks)
// console.log(class_12_marks[1])
// console.log(class_12_marks[2])
// console.log(class_12_marks[3])
// console.log("The length of marks class 12 is", class_12_marks.length) // Find the length of array

// // Array Methods
// let num = [1,2,3,4,5]
// let str = num.toString() // Str is string
// console.log(str)

// let join = num.join("_") // Join the characters present in an array
// console.log(join)

// num.pop() // Remove the last element from the array
// console.log(num)

// num.push(7) // It add new element at the end of array
// console.log(num)

// let r = num.shift() // It removes the first element of the array
// console.log(r)

// num.unshift(3)
// console.log(num) // Adds the first element in the original array

// delete num[0] // The length of array does not change
// console.log(num)

// let compare = (a,b)=>{ // Sort the array
//     return a-b
// }

// num.sort(compare)
// console.log(num)

// // Splice and Slice
// let arr = [1,3,5,7,9]
// arr.splice(1,2,45,67)
// console.log(arr)

// let m = arr.slice(1,3)
// console.log(m)

// Loops in Arrays
// let num = [2,4,5,6,7,8] // Classical Loop
// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// num.forEach((Element) =>{ // For each loop
//     console.log(Element * Element)
// })

// let str = "YashPurwar" // Array from loop, which is used to convert a string into a array and print the elements by using loop
// let arr = Array.from(str)
// console.log(arr)

// for(let i of num){  // For .... of Loop
//     console.log(i)
// }

// Array Map Method (This function does not change the original array)
let arr = [23,45,67,89]
let a = arr.map((value, index, array)=>{ // It return a array
    console.log(value, index, array)
    return value+1;
})

// Array filter method
let a2 = arr.filter((value)=>{ // It returns a array    
    return value<50 
})

// Array Reduce Method
let a3 = arr.reduce((h1, h2)=>{ // It returns a value
    return h1 + h2
})

console.log(a)
console.log(a2)
console.log(a3)