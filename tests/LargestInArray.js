"use strict";
class Practise {
    LargestNumber() {
        let arr1 = [10, 5, 30, 15, 50];
        let largest = arr1[0];
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] < largest) {
                largest = arr1[i];
            }
        }
        console.log("largest number:" + largest);
    }
    ///////Reverse a string
    StringReverse() {
        let str = "Kavya";
        let res = "";
        for (let i = str.length - 1; i >= 0; i--) {
            res = res + str[i];
        }
        console.log("Reverse of string" + res);
    }
    ///////Reverse characters in string
    ReverseCharacters() {
        let str = "I am learning Playwright";
        let words = str.split(" ");
        let result = "";
        for (let i = 0; i < words.length; i++) {
            let str1 = words[i];
            let reversed = " ";
            for (let j = str1.length - 1; j >= 0; j--) {
                reversed = reversed + str1[j];
            }
            result = result + reversed + " ";
        }
        console.log(result);
    }
    ///////Reverse Words
    ReverseWords() {
        let str = "I am learning Playwright";
        let words = str.split(" ");
        let result = "";
        for (let i = words.length - 1; i >= 0; i--) {
            result = result + words[i] + " ";
        }
        console.log(result);
    }
    ///////Duplicate in string
    DuplicateInString() {
        let str = "Kavya";
        let result = "";
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            if (str.indexOf(char) != str.lastIndexOf(char)) {
                if (!result.includes(str[i])) {
                    result = result + str[i];
                    //break;
                }
            }
        }
        console.log("Non repeating character" + result);
    }
    DuplicateInArray() {
        let arr = [10, 5, 10, 30, 40, 5];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
                if (!result.includes(arr[i])) {
                    result.push(arr[i]);
                    //break;
                }
            }
        }
        console.log("Non repeating character" + result);
    }
    /////// Duplicates in two arrays
    DuplicatesInTwoArrays() {
        let arr = [10, 20, 30, 10, 5];
        let arr1 = [10, 50, 20, 10, 5];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr1.includes(arr[i])) {
                if (!result.includes(arr[i]))
                    result.push(arr[i]);
            }
            if (arr.includes(arr1[i])) {
                if (!result.includes(arr1[i]))
                    result.push(arr1[i]);
            }
        }
        console.log(result);
    }
    ToRemoveDuplicatesInString() {
        let str = "Kavya";
        let result = " ";
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            if (!result.includes(char)) {
                result = result + str[i];
            }
        }
        console.log(result);
    }
    ReverseAnArray() {
        let arr = [10, 20, 30, 40, 50];
        let result = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        console.log(result);
    }
    MergeTwoArrays() {
        let arr = [10, 20, 30, 40, 50];
        let arr1 = [10, 20, 30, 40, 50];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i]);
        }
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i]);
        }
        console.log(result);
    }
    RemoveDuplicatesInArray() {
        let arr = [5, 10, 10, 20, 20];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
        console.log(result);
    }
    Anagrams() {
        let str1 = "eat";
        let str2 = "tea";
        let result = "";
        for (let i = 0; i < str1.length; i++) {
            let char = str1.charAt(i);
            if ((str2.includes(char)) && (str1.length == str2.length)) {
                if (!result.includes("Strings are Anagrams"))
                    result = result + "Strings are Anagrams";
            }
            else {
                if (!result.includes("Strings are not Anagrams"))
                    result = result + "Strings are not Anagrams";
            }
        }
        console.log(result);
    }
    PrimeNumbers() {
        let num1 = 30;
        for (let i = 2; i <= num1; i++) {
            let count = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count = count + 1;
                }
            }
            if (count != 2) {
                console.log("number is prime" + i);
            }
        }
    }
    PrimeNumbersInArray() {
        let arr = [5, 6, 7, 8, 9];
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            let num = arr[i];
            for (let j = 1; j <= num; j++) {
                if (num % j == 0) {
                    count = count + 1;
                }
            }
            if (count != 2) {
                console.log("prime numbers" + num);
            }
        }
    }
    FindDuplicatesWithout() {
        let str = "semaphore";
        let arr = str.split("");
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    for (let k = j; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                        console.log(arr[i]);
                    }
                }
            }
        }
    }
    RemoveDuplicatesWithout() {
        let str = "Naresh";
        let arr = str.split("");
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    for (let k = j; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                        arr.pop();
                    }
                }
            }
        }
        console.log(arr);
    }
    FindNonRepeatingWithout() {
        let str = "Kavya";
        let arr = str.split("");
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (i != j && arr[i] == arr[j]) {
                    count = count + 1;
                }
            }
            if (count == 0) {
                console.log(arr[i]);
                break;
            }
        }
    }
    RemoveConsonants() {
        let str = "naresh";
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                result = result + str[i];
            }
        }
        console.log(result);
    }
    RemoveVowels() {
        let str = "semaphore";
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
                result = result + str[i];
            }
        }
        console.log(result);
    }
}
let P = new Practise();
P.RemoveVowels();
