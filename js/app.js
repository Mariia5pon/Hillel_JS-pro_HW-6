function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

let mixedArray = [1, 'hello', 3, true, 5, '564899', null, 2.5];
let average = calculateAverage(mixedArray);
console.log(average);

function logToConsole() {
    alert('Натисніть F12.');
}
