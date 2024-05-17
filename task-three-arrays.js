/*

    1 - Correct the syntax error :

        A- [ 1,7  9  45, ]  
         A- SOLUTION ==>*/
             const numbers = [ 1 , 7 , 9 , 45];
        //OR:
             //var  numbers = [ 1 , 7 , 9 , 45];

        /*B- ["Str" "alex","moh"

          'the','fox' 'over' lazy, 'dog',  ]
         B- SOLUTION ==>*/
             const strings = ["Str" ,"alex","moh", "the","fox" ,"over", "lazy", "dog"];


  /*  2 - What the index of "Banana","Tomato" 
        var fruits = ["Tomato","Banana","Watermelon"]

        Banana = index 1
        Tomato = index 0

    3 - Create an array represents your:
       1- Favorite Food (5)
       2- Favorite Sport (3)
       3- Favorite Movie (4)  
       
         1- SOLUTION ==>*/
              var  favFood = ["kabseh " , "yalangi " , "butter chicken" , "pasta" , "pizza"];     

        //2- SOLUTION ==>
              var  favSport = ["Swimming " , "Tennis " , "Basket Ball"];     

        //3- SOLUTION ==>
              var  favMovie = ["Harry Potter series " , "pride and prejudice " , "A Man Called Otto " , "five feet apart"];     
        

   /* *4- Create a function called firstOfArray
       that take an array as a parameter and return the first element in an array

        Ex: firstOfArray([1,4,5]) => 1
        Ex: firstOfArray(["t","u","g","x"]) => "t"

        4- SOLUTION ==>
*/
          function firstOfArray(array) {
            return array[0];
          }

          document.getElementById("demo").innerHTML = firstOfArray([1, 4, 5]) + "<br>" + firstOfArray(["t", "u", "g", "x"]);
       

   /* 5 - Create a function called lastOfArray that take an array as a parameter and return the LAST element in an array

        Ex: lastOfArray([1,4,5]) => 5
        Ex: lastOfArray(["t","u","g","x"]) => "x"

        5- SOLUTION ==>
*/
          function lastOfArray(array) {
            return array[array.length - 1];
          }

          document.getElementById("demo").innerHTML = lastOfArray([1, 4, 5]) + "<br>" + lastOfArray(["t", "u", "g", "x"]);

     
 /*   6 - Using console make this array to be like this one (push, unshift, shift, pop)
          var array = [0,5,7,9]   =>    [1,3,4,6,8,9,10]
*/
          array.shift();
          array.shift();
          array.shift();
          array.unshift(8);
          array.unshift(6);
          array.unshift(4);
          array.unshift(3);
          array.unshift(1);
          array.push(10);
          
 /*   7 - Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
          var array2 = [5,9,-7,3.5]      
     
       ** if it's related to Question 6 >>*/
          array2.shift(); 
		  array2.push(-Math.abs(7)); 
		  array2.push(3.5);   
          
   /* 8 - Create a function called middleOfArray that take an array as a parameter and return the middle element in an array if it is have an odd elemnets
        and return the two middle elemnt in an array if it is have an even elemnets

        Ex: middleOfArray([1,4,5]) => 4
        Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
      */
          function middleOfArray(array) {
    var mid;
    if (array.length % 2 !== 0) {
        mid = Math.floor(array.length / 2);
        return array[mid]; 
    } else {
        mid = array.length / 2;
        return [array[mid - 1], array[mid]]; 
    }
}

console.log(middleOfArray([1, 4, 5])); 
console.log(middleOfArray(["t", "u", "g", "x"]));
/*
    9 - Using assignment operator (=) make the animals array have these animals
    var animals = ['cat', 'ele', 'bird']
    animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44] 
*/










/*
    10 - Create a function called indexOfArray that accept an array and index and return what this array have in this index

        var nums= [1,2,3,8,9]
        Ex: indexOfArray(nums,3) => 8
        Ex: indexOfArray(nums,1) => 2
        Ex: indexOfArray(nums,4) => 9

            **try more cases by your self
*/
function indexOfArray(arr, ind) {
    return arr[ind];
}

var nums = [1, 2, 3, 8, 9];

console.log(indexOfArray(nums, 3) + " " + indexOfArray(nums, 1) + " " + indexOfArray(nums, 4));


/*
    11 - Create a function called arrayExceptLast that accept an array and return the entire array except the last elemnt
    ** hint: search abou the function that will cut the array on MDN
        var nums= [1,2,3,8,9]
        Ex: arrayExceptLast(nums) =>  [1,2,3,8]

    **try more cases by your self
*/

var nums= [1,2,3,8,9]
const newArr = nums.slice(0,4);
console.log(newArr); 



/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr, num) {
    arr.pop();
    arr.push(num);
    return arr;
}

var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums, 10));



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13 - Create a function called sumArray that accept an array and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// Using for loop

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}

var nums = [1, 2, 3, 8, 9];
var sum = sumArray(nums);
console.log(sum); 

// Using while loop
function sumArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        ++i;
    }
    return sum;
}

var sumWhile = sumArrayWhile(nums);
console.log(sumWhile); 


/*
14 - Create a function called minInArray that accept an array and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// using built in function:

function minInArray(arr) {
    let minVal = Math.min(...arr);
    // as w3school the Math.min takes saperated values but after search the ... before the array's name works to let the function take the whole array as param
    return minVal;
}

var nums = [1, 2, 3, 8, 9];

var minVal = minInArray(nums);

console.log(minVal); 

//using for loop :
function minInArray (arr){
    let minVal=arr[0];
    for(let i=1 ; i<arr.length ;++i){
        if(arr[i]<minVal){
            minVal===arr[i];
        }
    }
    return minVal;
}

var nums = [1, 2, 3, 8, 9];
var minVal = minInArray(nums);
console.log(minVal);

//using while loop 
function minInArray(arr) {
    let minVal = arr[0];
    let i = 1; 
    while (i < arr.length) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
        i++;
    }
    return minVal;
}

var nums = [1, 2, 3, 8, 9];
var minVal = minInArray(nums);
console.log(minVal); 



/*
15 - Create a function called removeFromArray that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// using for loop
// delete  method returns undefined element thats why i used the splice method 
function removeFromArray(arr, n) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === n) {
            arr.splice(i, 1); 
        }
    }
    return arr;
}

var nums= [1,2,3,8,9]
console.log(removeFromArray(nums, 8)); 

// using while loop
function removeFromArray(arr, n) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === n) {
            arr.splice(i, 1); 
        } else {
            i++;
        }
    }
    return arr;
}

var nums= [1,2,3,8,9]
console.log(removeFromArray(nums, 8)); 


/*
16 - Create a function called oddArray that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop 
function oddArray(arr) {
    let myArray = [];  
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 !== 0) {
            myArray.push(arr[i]);
        }
    }
    return myArray;
}

var nums= [1,2,3,8,9];
console.log(oddArray(nums)); 

//while loop 
function oddArray(arr) {
    let myArray = [];  
    let i = 0;  

    while (i < arr.length) { 
        if (arr[i] % 2 !== 0) { 
            myArray.push(arr[i]); 
        }
        i++;  
    }
    
    return myArray;  
}

var nums= [1,2,3,8,9];
console.log(oddArray(nums)); 



/*
17 - Create a function called aveArray that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// Using for loop
function aveArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum / arr.length;  
}

var nums = [1, 2, 3, 8, 9];
var avgFor = aveArray(nums);
console.log(avgFor);  

// Using while loop
function aveArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        ++i;
    }
    return sum / arr.length; 
}

var avgWhile = aveArrayWhile(nums);
console.log(avgWhile); 



/*
18 - Create a function called shorterInArray that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr) {
    let shortest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    } 
    return shortest;
}

// the var strings array keeps throwing error that's why i chnged it's name to string
var string= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(string));  

// while loop
function shorterInArrayWhile(arr) {
    let shortest = arr[0]; 
    let i = 1; 
    while (i < arr.length) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
        i++;
    }
    return shortest;
}

var string = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArrayWhile(string));  


/*
19 - Create a function called repeatChar that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop

function repeatChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a")); 
console.log(repeatChar(string, "z")); 

// while loop
function repeatCharWhile(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {
            count++;
        }
        i++;
    }
    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatCharWhile(string, "a")); 
console.log(repeatCharWhile(string, "z")); 




/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// foor loop

function evenIndexOddLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var string = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(string)); 

function evenIndexOddLengthWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

var string = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLengthWhile(string)); 


/*
21 - Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop 
function powerElementIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], i));
    }
    return result;
}

var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums)); 
 ///// the output you provided has a litte issue cuz any number to the power 0 wil give 1 not zero

// while loop 

function powerElementIndexWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(Math.pow(arr[i], i));
        i++;
    }
    return result;
}

var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndexWhile(nums)); 



/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function evenNumberEvenIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums)); 


//while loop 
function evenNumberEvenIndexWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndexWhile(nums)); 


/*          THE END OF FILE #ONE       */