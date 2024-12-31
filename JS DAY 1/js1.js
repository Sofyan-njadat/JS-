// let x = 250 ;
// create variable Calculate the value of zakat for x ,
// If you know the percentage of zakat = 2.5 %; 

let x = 250;
let zakatPer = 0.025;

let zakat = x * zakatPer;

console.log ("the zakat for " + x + " is " + zakat);




// Array Tasks :

// 1-Correct the syntax error

let Array1 = [ 1, 7, 9, 45]

let Array2 = ["Str" , "alex" , "moh" ,"the" , "fox" , "over" , "lazy" , "dog"]

console.log (Array1);
console.log(Array2);




// 2-What the index of "Banana","Tomato"

// var fruits=["Tomato","Banana","Watermelon"]

// الجواب
// "Banana" 1  ,  "Tomato" 2





// 3-Create an array represents your:

// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)

let Favorite = [ ["Mansaf " , "BBQ"] , 
                 ["Football ", "Real Madrid " , "F1"] ,
                 ["Gladiator " , "GladiatorII"] ];

console.log("food : " + Favorite [0]);
console.log("sport : " + Favorite [1]);
console.log("movie : " + Favorite [2]);




// 4-Create a Variable to return the first element in an array 
// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"

let arr1 = [1, 2, 3]
let arr2 = ["t", "u", "g", "x"]
// let firstOfArray = [ arr1[0] + " & " + arr2[0] ] 

// console.log ("The First Of Array is " + firstOfArray);
console.log("The First Of Array 1 is " + arr1[0] );
console.log("The First Of Array 2 is " + arr2[0] );




// 5-Create a Variable to return the lastOfArray element in an array 

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"

let arr3 = [ 1, 3, 6 ]
let arr4 = [ "t", "u", "g", "x" ]

console.log("The Last Of Array 3 is " + arr3[arr3.length -1]);
console.log("The Last Of Array 4 is " + arr4[arr4.length -1]);




// 6-Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]


let arr5 = [0, 5, 7, 9]

arr5.shift()
arr5.shift()
arr5.shift()
arr5.unshift(1 , 3, 4 , 6, 8)
arr5.pop()
arr5.push(10)

console.log(arr5);




// 7-Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]

let arr6 = [5, 9, -7, 3.5]

arr6.shift()
arr6.pop()
arr6.push(24)
arr6.unshift(8)

console.log(arr6);




// 8-Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let arr7 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr7.sort();
console.log(arr7);




// 9-Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A


function gradeTxt(grade) {
    if (grade < 50) 
        return "Fail";

    else if (grade >= 50 , grade <= 59 )
        return "E";

    else if (grade >= 60 , grade <= 69)
        return "D"

    else if (grade >= 70 , grade <= 79)
        return "C"

    else if (grade >= 80 , grade <= 89)
        return "B"

    else if (grade >= 90 , grade <= 100)
        return "A"
}

console.log("Your Grade Is " + gradeTxt(94));




// 10-Write a JS code to print a pattern using for loop

//    1 
//    1 2 
//    1 2 3 
//    1 2 3 4 
//    1 2 3 4 5 
//    1 2 3 4 5 6 
//    1 2 3 4 5 6 7 
//    1 2 3 4 5 6 7 8 

for (let i = 1; i <= 8; i++) {

    let row = ""; 

    for (let s = 1; s <= i; s++) {
        row += s + " "; 
    }
    console.log(row);
}







