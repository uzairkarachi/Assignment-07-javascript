// Guess Palindrome word"
// 1. You need to take a prompt from the user.
// 2. Check the word provided in the prompt and tell whether it is a palindrome or not.
// 3. If it is, show an alert saying, 'It's a Palindrome word.'
// 4. If it is not, show an alert saying, 'It's not a Palindrome word.'
// 5. You need to do this using methods.
Palindrome words using split, reverse & join metthod


var word = prompt("Enter a word to check if it's a palindrome:");
var reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}



// Palindrome words using for loop and nested

for (var i = 0; i <= 5; i++) {
    var word = prompt("Enter a word to check if it's a palindrome:");
    var isPalindrome = true;
    for (var j = 0; j < word.length / 2; j++) {
        if (word[j] !== word[word.length - 1 - j]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }
}




var arr = "asif ahmed"
console.log(arr.split());

// Reverse Array Method:


var arr = ["asif", "ahmed", "ali","khan","raza"]
console.log(arr.reverse());
console.log(arr.reverse().join(" "))