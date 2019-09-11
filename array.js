//var colors = ["red", "white", "blue", "pink", "green"]

function printReverse (array) {
    var newCol = []
    for(let i = array.length - 1; i >= 0; i--) {
        newCol.push(array[i])
    }
    return newCol
}
printReverse(colors)

function isUniform(arr) {
    var first = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true
}


function sumArray(arr) {
    var total = 0;
    for(let i = 0; i < arr.length; i++) {
        total+= array[i]
    }
    return total
}
