// Define a Array
let class_12_marks = [1,2,3,4,5,6]
console.log(class_12_marks)
console.log(class_12_marks[1])
console.log(class_12_marks[2])
console.log(class_12_marks[3])
console.log("The length of marks class 12 is", class_12_marks.length) // Find the length of array

// Array Methods
let num = [1,2,3,4,5]
let str = num.toString() // Str is string
console.log(str)

let join = num.join("_") // Join the characters present in an array
console.log(join)

num.pop() // Remove the last element from the array
console.log(num)

num.push(7) // It add new element at the end of array
console.log(num)

let r = num.shift() // It removes the first element of the array
console.log(r)

num.unshift(3)
console.log(num) // Adds the first element in the original array

delete num[0] // The length of array does not change
console.log(num)

let compare = (a,b)=>{ // Sort the array
    return a-b
}

num.sort(compare)
console.log(num)

// Splice and Slice
let arr = [1,3,5,7,9]
arr.splice(1,2,45,67)
console.log(arr)

let m = arr.slice(1,3)
console.log(m)