console.log("Assignment of weak 7");

// Write a program that uses filter to remove all negative numbers from an array of numbers
var arrayp1 : number[] = [] ;
var n1:number=20;
for (let i = 0; i < n1; i++) {
arrayp1.push((-1)**i *i);
}
console.log("The original array is ", arrayp1);
let arrayp11=arrayp1.filter((x) => x>=0);
console.log("Array after removing negative numbers=", arrayp11)


// let arrayp1=array.map((x) => 2*x);
// console.log(arrayp1)





// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var arrayp2 : number[] = [1, 2, 3, 4, 5] ;
let arrayp22=arrayp2.map((x) => 2*x);
console.log("Array after multiplying by 2=", arrayp22)




// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var arrayp3 : string[] = ["apple", "banana", "cherry", "date", "grape"] ;
let arrayp33=arrayp3.filter((data) => {
    if(data.length>5)
    return true});
console.log("The fruits with more than 5 characters=", arrayp33)


// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var arrayp4 : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
let arrayp44=arrayp4.filter((x) => {
    for (let i = 0; i < x; i++) {
    if(i*i==x)
   return true}
});
console.log("Array containing the squares of even numbers=", arrayp44.filter((x) => x % 2 ==0));




// console.log("The array containing the squares of even numbers =", arrayp441)




// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method
// to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var arrayp5 : number[] = [0, 10, 20, 30, 40] ;
let arrayp55=arrayp5.map((x) => x * 1.8 + 32);
console.log("Array containing temperature is converted to Fahrenheit=", arrayp55)


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to
// create a new array containing the doubled values of odd numbers.

var arrayp6 : number[] = [3, 6, 9, 12, 15, 18] ;
let arrayp66=arrayp6.filter((x) => { if(x % 2 == 1 ) 
    return true   });
let arrayp661=arrayp66.map((x) => 2*x );
console.log("array containing the doubled values of odd numbers=", arrayp661)



