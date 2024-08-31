// Task 1

function removeCharacterArray() {
    function removeCharacters(str, charsToRemove) {
        let result = '';

        for (let i = 0; i < str.length; i++) {
            if (charsToRemove.indexOf(str[i]) === -1) {
                result += str[i];
            }
        }

        return result;
    }

    const inputString = prompt("Введіть рядок:");
    const charsToRemoveString = prompt("Введіть символи для видалення:");

    const charsToRemove = charsToRemoveString.split('');

    const result = removeCharacters(inputString, charsToRemove);

    document.getElementById('task-1_result').innerHTML = `Ваш рядок: ${inputString}. Символи для видалення: ${charsToRemoveString}. Результат: ${result}`;
}

// Task 2

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
console.log(`Task 2: ${average}.`);

function logToConsole() {
    alert('Натисніть F12.');
}

//Task 3

function getResultOfTask3() {
    function removeElement(array, item) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== item) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }

    const inputString = prompt("Введіть масив через кому:");
    const elementToRemove = parseInt(prompt("Введіть елемент для видалення:"));
    const inputArray = inputString.split(',').map(Number);

    const result3 = removeElement(inputArray, elementToRemove);
    document.getElementById('task-3_result').innerHTML = result3.join(', ');
}
