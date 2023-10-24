function sortArrayDescending(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
}

const myArray = [5, 2, 9, 1, 5, 6];
sortArrayDescending(myArray);
console.log(myArray);
