

//  Array: An array ios a special variable which can hold more than one value. The index of an array starts from (0)
let foods = ["Tomato", "Potato", "Carrot", "LadyFinger"]
console.log(foods)

//  POP METHOD: The method which is used to remove any element from the end of array
let poppedValue = foods.pop()
console.log(poppedValue);
console.log(foods);


//  PUSH METHOD: The method which is used to add any element in the end of array
let pushedValue = foods.push("Garlic")
console.log(pushedValue);
console.log(foods);

// //  SHIFT METHOD: The method which is used to remove  element from the starting of array
let shiftedValue = foods.shift()
console.log(shiftedValue);
console.log(foods);


// //  UNSHIFT METHOD: The method which is used to add element in the starting of an array
let unshiftedValue = foods.unshift("EggPlant")
console.log(unshiftedValue);
console.log(foods);


//  Slice Method: which is used to cut a piece of of your array ignoring your 1st array and makes a new array for sliced part.


let sliced = foods.slice(2,4)
console.log(sliced);
console.log(foods);



// Spliced Method: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 

let spliced = foods.splice(0 , 2, "cabbage", "cauliflower", " Onion")
console.log(spliced);
console.log(foods);


//  OBJECT: the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

const Student = {
    name: "Nazar Ali",
    class: 12,
    email: "mazarinazarali04@gmail.com",
    contactNumber: "03092989256"
}
console.log(Student);

// Using functions in Object
const teacher = {
    name: "Ahmed Raza",
    email: "ahmed9@gmail.com",
    instructor(){
        return "Ahmed Raza is Instructor at Governor IT initiative"
    }
}
console.log( teacher.instructor());


// Objects in array are used for largr scale projects in which we have to store data in millions
const students = [{
    name: "Nazar Ali",
    email: "mazarinazarali04@gmail.com",
    RollNumber: 123
},
{name: "Shoaib",
email: "Shoaib04@gmail.com",
RollNumber: 12345},
{name: "Adeel",
email: "Adeel04@gmail.com",
RollNumber: 2546} ]



console.log(students);

// Tpe Alias: Type Aliases can reduce code duplication in our code 


type  MazharMeerani = string
type Mazharumrani = string
const mazhar: MazharMeerani = "Friend"
console.log(mazhar);
const mazhar1: Mazharumrani = "Office Worker"
console.log(mazhar1);

// Array
//  POP METHOD:
//  PUSH METHOD:
//  Shift
// Unshift
// Slice
// Spliced 
// Object
// Functions in Object
//  Objects in an array
// Type Alias
