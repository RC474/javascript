console.log("Print all numbers between -10 and 19");
var i = -10;
while(i <= 19) {
    console.log(i)
    i++;
}

console.log("Print all even numbers between 10 and 40");
var i = 10;
while(i <= 40) {
    if(i % 2 === 0) {
        console.log(i)
    }
    i++;
}

console.log("Print all odd numbers bwtween 300 and 333");
var counter = 300;
while(counter <= 333) {
    if(counter % 2 !== 0) {
        console.log(counter)
    }
    counter++;
}

console.log("Print all numbers divisiable by 5 and 3 between 5 and 50");
var counter = 5;
while(counter <= 50){
    if(counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter)
    }
    counter++;
}