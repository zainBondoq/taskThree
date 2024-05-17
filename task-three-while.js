/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
function subtract(n) {
    let result = n;
    let i = n - 1;
    while (i >= 0) {
        result -= i;
        i--;
    }
    return result;
}

console.log(subtract(2)); 
console.log(subtract(5)); 
console.log(subtract(9));



/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorial(2)); 
console.log(factorial(4)); 


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(str, num) {
    let result = "";
    while (num !== 0) {
        result += str;
        if (num !== 1) {
            result += " ";
        }
        num--;
    }
    return result;
}

console.log(repeatStr("to", 2)); 
console.log(repeatStr("to", 4)); 


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(num1, num2) {
    let sum = 0;
    let currentNum = num1;
    while (currentNum <= num2) {
        sum += currentNum;
        currentNum++;
    }
    return sum;
}

console.log(sum2(4, 5)); 
console.log(sum2(3, 6)); 


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(str1, str2) {
    let result = "";
    let count = str2.length;
    while (count !== 0) {
        result += str1;
        if (count !== 1) {
            result += " ";
        }
        count--;
    }
    return result;
}

console.log(repeatStr2("ro", "cc")); 
console.log(repeatStr2("ro", "fff")); 


/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1, num2, num3) {
    let exponentResult = 1;
    let count = num3;
    while (count !== 0) {
        exponentResult *= num2;
        count--;
    }
    return num1*exponentResult;
}

console.log(multiOf(4, 10, 3)); 
console.log(multiOf(6, 3, 2));  
console.log(multiOf(6, 2, 3));  

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(num1, num2) {
    let result = 1;
    let currentNum = num1;
    while (currentNum <= num2) {
        result *= currentNum;
        currentNum++;
    }
    return result;
}

console.log(muti2(4, 5)); 
console.log(muti2(3, 6)); 


/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(num1, num2) {
    let result = "";
    let currentNum = num1 + 1;
    while (currentNum !== num2) {
        if (currentNum !== num1 + 1) {
            result += ", "; // cuz the output look needs the comma :)
        }
        result += currentNum;
        currentNum++;
    }
    return result;
}

console.log(numberBetweenUs(2, 8)); 
console.log(numberBetweenUs(1, 3)); 


/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

// i dont see that there's any need for while loop
function countDown(num) {
    if (num === 0) {
        return "done";
    } else {
        if (num === 1) {
            return num + ", " + countDown(num - 1);
        } else {
            return num + ", " + countDown(num - 1);
        }
    }
}

console.log(countDown(5)); 
console.log(countDown(2)); 
console.log(countDown(7)); 

/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(num1, num2) {
    let result = 0;
    let count = num2;
    while (count !== 0) {
        result += num1;
        count--;
    }
    return result;
}

console.log(multiplication2(5, 4)); 
console.log(multiplication2(2, 8)); 
console.log(multiplication2(7, 6));


/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/

function mod2(num1, num2) {
    while (num1 >= num2) {
        num1 -= num2;
    }
    return num1;
}

console.log(mod2(5, 4)); 
console.log(mod2(2, 8)); 
console.log(mod2(7, 4));
console.log(mod2(8, 4)); 

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
function repeatChar(str, char) {
    let count = 0;
    let index = 0;
    char = char.toLowerCase(); 
    while (index < str.length) {
        if (str[index].toLowerCase() === char) {
            count++;
        }
        index++;
    }
    return count;
}

console.log(repeatChar("schOol", "o")); 
console.log(repeatChar("school", "a")); 
console.log(repeatChar("School", "s")); 



