console.log("Print all the number between -10 and 19")

for(let i = -10; i <= 19; i++) {
    console.log(i)
}

console.log("Print all even numbers between 10 and 40")

for(let i = 10; i <= 40; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

console.log("Print all odd numbers between 300 to 333") 

for(let i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
    
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50")

for(let counter = 5; counter <= 50; counter++) {
    if(counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter)
    }
}

