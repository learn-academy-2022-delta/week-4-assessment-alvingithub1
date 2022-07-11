// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { isTypedArray } = require("util/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("removeFirst", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors1a = ["blue", "green", "yellow", "pink"]

    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(colors1).toEqual(expect.arrayContaining(colors1a))
    })
})

//     ReferenceError: removeFirst is not defined

// b) Create the function that makes the test pass.

// Psuedocode:
// 1. Create a new function called removeFirst and takes in a parameter called array
// 2. Use a .shift built-in method to delete the first item in the index
// 4. Use a .sort HOF to sort/shuffle the array
//    4a. Use Math.random as a way to randomize the array inputs
// 5. Return the array

const removeFirst = (array) => {
    array.shift()

    array.sort(() => Math.random() - 0.5)
    return array
}

console.log(removeFirst(colors1)) // Output: [ 'green', 'pink', 'blue', 'yellow' ]
console.log(removeFirst(colors2)) // Output: [ 'periwinkle', 'indigo', 'saffron', 'aquamarine', 'ochre' ]

// PASS  ./code-challenges.test.js
// removeFirst
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]

    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

//     ReferenceError: minMax is not defined

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

// 1. Create a new function called minMax and takes in a parameter called array
// 2. Create a new variable called max
//    2a. Set max to equal a Math.max built-in method
//    2b. Use the spread operator and use the array parameter. The spread operator allows the .max method to run and find which number is the largest in the array. Without the spread operator, it will return NaN.
// 3. Create a new variable called min. Repeat the same steps as 2a and 2b.
// 4. Creaete a new variable called newArray and set an array of [min, max]
// 5. Return the newArray

const minMax = (array) => {
    const max = Math.max(...array)
    const min = Math.min(...array)
    let newArray = [min, max]
    return newArray
}
console.log(minMax(nums1)) // Output: [ -8, 90 ]
console.log(minMax(nums2)) // Output: [ 5, 109 ]

// PASS  ./code-challenges.test.js
// minMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineNoDups", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(combineNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ReferenceError: combineNoDups is not defined


const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Psuedocode:
// 1. Create a new function called combineNoDups and takes in 2 parameters called array1 and array2
// 2. Create a new variable called newArray and use the .concat method to combine both arrays
// 3. Create a new variable called total that will hold an empty array
// 4. Create a for loop using the newArray length to iterate thru each index
//    4a. Within the for loop, we will create an if conditional. We want to use the bang operator to check if the variable total .includes the newArray index that the for loop is currently on
//    4b. If the total array doesn't have the input from newArray, then we will want to do a total.push method the newArray index. Basically what this will do is put the number from newArray to the total array. This will remove duplicates from the newArray
// 5. Lastly, we will return the total. This total array will only include numbers that are not duplicated from the newArray.


const combineNoDups = (array1, array2) => {
    let newArray = array1.concat(array2)
    let total = []

    for(let i=0; i<newArray.length; i++) {
        if(!(total.includes(newArray[i]))) {
            total.push(newArray[i])
        }
    }
    return total
}

// PASS  ./code-challenges.test.js
// combineNoDups
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)


// Notes: So I reviewed Elyse's notes from last week's assessment and it was recommended to try the stretch problems out (which I don't know why I haven't). So this week I wanted to try it. I decided to utilize the spread operator and the below function works just like the one above (I still have a bad relationship with HOF, but maybe one day we will get there).

// Essentially, it takes both arrays, places it in a new variable called newArray. It creates a new Set object and puts the numbers in newArray. Set is similar to when I've solved some problems in Java and only 1 unique value can be used in it, so this makes it handy for this problem. Lastly, you return newArray.

// const combineNoDups = (array1, array2) => {
//     let newArray = [...new Set([...array1, ...array2])]
//     return newArray
// }


console.log(combineNoDups(testArray1, testArray2)) // Output: [ 3, 7, 10, 5, 4, 8, 2, 1 ]
// b) Create the function that makes the test pass.