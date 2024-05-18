/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
//using built in function:
function largerNumber(num1, num2) {
    return Math.max(num1, num2);
  }
// using if statment:
function largerNumber(num1, num2) {
    if(num1>=num2){
        return num1;
    }else{
        return num2;
    }
  }
let input1 = prompt("Enter the first number:");
let number1 = Number(input1);
let input2 = prompt("Enter the second number:");
let number2 = Number(input2);
let larger = largerNumber(number1,number2);
console.log("The larger is : " + larger);

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
function myFunction() {
    alert("The product sign: " + productSign);
  }
  
  function product(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  
  let in1 = prompt("Enter the first number:");
  let n1 = Number(in1);
  let in2 = prompt("Enter the second number:");
  let n2 = Number(in2);
  let in3 = prompt("Enter the third number:");
  let n3 = Number(in3);
  
  let prod = product(n1, n2, n3);
  let productSign = "";
  
  if (prod < 0) {
    productSign = "-";
  } else {
    productSign = "+";
  }
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function myFunction() {
    alert("The sorted array: " + sortedArr);
}

function sortFun(num1, num2, num3) {
    let arr = [];
    if (num1 <= num2 && num1 <= num3) {
        arr.push(num1);
        if (num2 <= num3) {
            arr.push(num2);
            arr.push(num3);
        } else {
            arr.push(num3);
            arr.push(num2);
        }
    } else if (num2 <= num1 && num2 <= num3) {
        arr.push(num2);
        if (num1 <= num3) {
            arr.push(num1);
            arr.push(num3);
        } else {
            arr.push(num3);
            arr.push(num1);
        }
    } else {
        arr.push(num3);
        if (num1 <= num2) {
            arr.push(num1);
            arr.push(num2);
        } else {
            arr.push(num2);
            arr.push(num1);
        }
    }
    return arr;
}

let int1 = prompt("Enter the first number:");
let num1 = Number(int1);
let int2 = prompt("Enter the second number:");
let num2 = Number(int2);
let int3 = prompt("Enter the third number:");
let num3 = Number(int3);

let sortedArr = sortFun(num1, num2, num3);
  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function myFunction() {
    alert("The maximum number is: " + maximum);
}
function maxFun(num1, num2, num3, num4, num5) {
    if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
        return num2;
    } else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
        return num3;
    } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
        return num4;
    } else {
        return num5;
    }
}
let inte1 = prompt("Enter the first number:");
let numb1 = Number(inte1);
let inte2 = prompt("Enter the second number:");
let numb2 = Number(inte2);
let inte3 = prompt("Enter the third number:");
let numb3 = Number(inte3); 
let inte4 = prompt("Enter the forth number:");
let numb4 = Number(inte4); 
let inte5 = prompt("Enter the fifth number:");
let numb5 = Number(inte5);  
let maximum = maxFun(num1, num2, num3 ,num4 ,num5);

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function myFunction() {
    alert(z);
}

function fun(num1, num2) {
    if(num1>=num2){
        return "Hello World";
    }else{
        return "Good Bye";
    }
  }
let xinput = prompt("Enter x:");
let x = Number(xinput);
let yinput = prompt("Enter y:");
let y = Number(yinput);
let z = fun(x,y);
console.log(z);
 /******* End Your Code ********* */



