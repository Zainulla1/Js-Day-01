
//  Exercise -1

//write a Javascript program to get the extension of a file Name.

const getFileExtension = (str) => str.slice
(str.lastIndexOf('.'));
console.log (getFileExtension('index.html'));
console.log (getFileExtension('webpack.config.js'));

//Exercise -2

//Javascript program to check two numbers and return true
//if one of the number is 100 or if the sum of the numbers is 100

const isEqualTo100 = (a,b) => a === 100 ||
b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0));//true
console.log(isEqualTo100(0,100));//true

console.log(isEqualTo100(10,0));//false
console.log(isEqualTo100(0,10));//false

console.log(isEqualTo100(20,80));//true
console.log(isEqualTo100(50,50));//true

// Exercise -3

//Create a new string adding "New!" in front of a given string begins
//with "New!" already then the original string.
 

const addNew = (str) =>
    str.IndexOf('New!') === 0 ? str : `New! ${str}` ;

 console.log(addNew('New! offers'));

 //Exercise -4

//  current  date with expected output
// mm-dd-yy, mm/dd/yyyy  or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());