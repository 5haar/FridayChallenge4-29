// 1.

myArrowFunction = (num1, num2) => {
  return num1 + num2;
};

console.log(myArrowFunction(5, 10));

// 2.

arrowAdd100 = (num1) => num1 + 100;

console.log(arrowAdd100(200));

// 3. (This is my attempt but I could not for some reason figure it out. I found other ways of doing it on Google but )

countLetters = (statement, letter) => {
  for (let i = 0; i <= statement.length; i++) {
    let counter = 0;
    arr = statement.split("");
    if (arr[i] == letter) {
      counter = counter + 1;
    }
    return counter;
  }
};

console.log(countLetters("hello", "l"));

countLetters2 = (str) => {
  let letters = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = alphabet.split("");
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) > -1) {
      letters = letters + 1;
    }
  }
  return letters;
};
console.log(countLetters2("Hello World"));
