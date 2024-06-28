const readline = require('readline');

// Function for calculate sum 
function calculateSum(a, b) {
    return a + b;
}

//Function for check even number
function isEven(num) {
    return num % 2 === 0;
}

//Function for find maximum number
function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//Function for reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//Function for filter odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

//Function for sum of numbers
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

//Function for sort numbers in ascending order
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

//Function for capitalize first letter.
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Function to handle user input and demonstrate the functions
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter two numbers for sum calculation: ', (input) => {
        const [num1, num2] = input.split(' ').map(Number);
        const sum = calculateSum(num1, num2);
        console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
        
        rl.question('Enter a number to check even number: ', (num) => {
            const evenCheck = isEven(Number(num));
            console.log(`${num} is even: ${evenCheck}`);

            rl.question('Enter numbers to find the maximum: ', (inputArr) => {
                const arr = inputArr.split(' ').map(Number);
                const max = findMax(arr);
                console.log(`Maximum number in [${arr}] is: ${max}`);

                rl.question('Enter a string to reverse it: ', (str) => {
                    const reversed = reverseString(str);
                    console.log(`Reversed string of "${str}" is: "${reversed}"`);

                    rl.question('Enter numbers to filter odd numbers: ', (inputArr) => {
                        const arr = inputArr.split(' ').map(Number);
                        const oddNumbers = filterOddNumbers(arr);
                        console.log(`Odd numbers in [${arr}] are: [${oddNumbers}]`);

                        rl.question('Enter numbers to find their sum: ', (inputArr) => {
                            const arr = inputArr.split(' ').map(Number);
                            const arraySum = sumArray(arr);
                            console.log(`Sum of numbers in [${arr}] is: ${arraySum}`);

                            rl.question('Enter numbers to sort them in ascending order: ', (inputArr) => {
                                const arr = inputArr.split(' ').map(Number);
                                const sortedArray = sortArray(arr);
                                console.log(`Sorted array in ascending order: [${sortedArray}]`);

                                rl.question('Enter a string to capitalize its first letter: ', (str) => {
                                    const capitalized = capitalizeFirstLetter(str);
                                    console.log(`Capitalized string of "${str}" is: "${capitalized}"`);

                                    rl.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Execute the main function to start the interaction
main();
