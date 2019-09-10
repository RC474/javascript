function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}


function factorial(num) {
   var result = 1;
   for(let i = 2; i <= num; i++) {
       result = result * i;
   } 
   return result;
}

function kebabToSnake(str) {
    var newStr = "";
    newStr = str.replace(/-/g, "_");
    return newStr;
} 