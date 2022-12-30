
// square kora 
const person =[10,20,30,40,50]
const square= [];
person.forEach(myfunction)
function myfunction(x)
{
    square.push(x*x)
}
console.log(square)

// add numbers

const number = [20,30,40,50,100]
number.forEach(add)

function add(x)
{
    console.log(x=x+5)
}

// eta ka onno vabe o kora jai like 

const newNumbers = [5,10,15,20,25];

newNumbers.forEach(function(x,index,arr){
 arr[index]= x+5
})
console.log(newNumbers)