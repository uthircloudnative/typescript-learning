var langName = "This Java Script";

console.log("Actual first value of variable langName : " + langName);

// In JS we can able to assign a String variable with Integer value. Because its not a strongly typed language.
langName = 10;

console.log("After assigning a number to the variable, the value is: " + langName);

langName = function(num1, num2){
    return num1 + num2;
}

console.log("After defining function in the variable langName : "+langName)
console.log("After assigning a function to the variable, the value is: " + langName(10, 20));
