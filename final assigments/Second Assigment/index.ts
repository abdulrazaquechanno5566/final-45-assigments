// Storing the name of a person in a variable

let personsName:string = "Abdul Razaque";

// Printing the name of a person in Lower Case

console.log("Lower Case:", personsName.toLowerCase());

// Printing the name of a person in Upper Case

console.log("Upper Case:", personsName.toUpperCase());

//Printing the name of a person in Title Case

console.log("TitleCase:", personsName.split(' ').map(word => word.charAt(0).toUpperCase()
 + word.slice(1).toLowerCase()).join(' '));


