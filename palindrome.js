let finalNumber = [];
let finalPalindromeArr = [];
const palindromedescendant = number => {
    finalPalindromeArr.push(number);
    let numberArr = String(number).split('');
    if (numberArr && numberArr.length > 2) {
        if (numberArr[0] === numberArr[numberArr.length - 1]) {
            if (checkPalindrome(numberArr)) {
                let palindrome = ``;
                finalPalindromeArr.map((f, index) => {
                    if (index === f.length - 1) palindrome = `${palindrome} ${f}`;
                    else if (index === 0) palindrome = `${f}`;
                    else palindrome = `${palindrome} -> ${f}`;
                });
                console.log(palindrome);
                return true;
            } else {
                console.log(`Number is not a palindrome.`);
                return false;
            }
        } else {
            let finalArr = addNumber(numberArr);
            finalNumber = [];
            palindromedescendant(parseInt(finalArr.join('')));
        }
    } else if (numberArr && numberArr.length === 2) {
        if (numberArr[0] === numberArr[numberArr.length - 1]) {
            console.log(`Number itself is a palindrome.`);
            return true;
        } else {
            console.log(`Number is not a palindrome.`);
            return false;
        }
    } else {
        console.log(`Number is not a palindrome.`);
        return false;
    }
}

const checkPalindrome = arr => {
    if (arr.length > 2) {
        if (arr[0] === arr[arr.length - 1]) {
            arr = arr.slice(1, arr.length - 1);
            checkPalindrome(arr);
        } else {
            palindromedescendant(parseInt(finalArr.join('')));
        }
    }
    return true;
}

const addNumber = arr => {
    if (arr && arr.length) {
        if (arr.length >= 2) {
            finalNumber.push(parseInt(arr[0]) + parseInt(arr[1]));
            arr = arr.slice(2);
            addNumber(arr);
        } else {
            finalNumber.push(parseInt(arr[0]));
        }
    }
    return finalNumber;
}

const isPalindrome = palindromedescendant(34341);
console.log(isPalindrome);