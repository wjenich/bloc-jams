//For each contains a loop loops through all elements in an array and executes a callback function for each elelment for each element in the array. //

function forEach(array, callback) {
    for(var i = 0; i < array.length; i++) { 
        callback(array[i]);
    }
}