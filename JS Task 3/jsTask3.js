
// Q1 ///////////////////////
function tellFortune(jobTitle, location, partnerName, children) {

    console.log("You will be a " + jobTitle + " in " + location + " , and married to " + partnerName + " with " + children + " Kids");

}
tellFortune("software engineer", "Jordan", "Alice", 3);



// Q2 ///////////////////////
function calculateDogAge(dogAge) {
    console.log( "Your doggie is " + (dogAge*7) + " years old in dog years! "  ); 

}
calculateDogAge(2);



// Q3 ///////////////////////
function calculateSupply(age , cups) {
    let years = 100 - age
    let totalNeed = ((years * 365)* cups)
    console.log( "You will need " + totalNeed + " to last you until the ripe old age of 100. " );

}
calculateSupply (30 , 3);



// Q4 ///////////////////////
function greet(name) {
    return "Hello " + name
    
}
console.log(greet ("Sofyan"));



// Q5 ///////////////////////
// function double(cat) {
//   return 2 * cat;
// }
// console.log(double (3) );

// function double(num1) {
//   return 2 * num1 ;
// }
// console.log(double(7));

// function double(num2) {
//   return 2 * num2 ;
// }
// console.log(double (9));



// Q6 ///////////////////////
// function double1(x) {
//   return 2 * x ;
// }
// console.log(double1(5));

// function double2 (x) {
//     return 2 * x;
// }
// console.log(double2(4));

// function double3(x) {
//   return 2 * x;
// }
// console.log(double3(3));



// Q7 ///////////////////////
// function cube(num3) {
//     return num3**3;
// }
// console.log(cube(4));



// Q8 ///////////////////////
function multiply(num4 , num5) {
    return num4 * num5 ;
}
console.log(multiply(10, 11));



// Q9 ///////////////////////
function passed(age) {
    let x = 20 - age
    if (age >= 20) {
    return "yes u can !";
    }
    else { return `please come back after ${x} years to get one`  }
}
console.log(passed (21));
console.log(passed (17));
console.log(passed (20));



// Q10 //////////////////////
function sameLength(name1 , name2) {
    if (name1.length == name2.length) {
        console.log(true);   

    }
    else{
        console.log(false);
    }
}
sameLength("Sofyan" , "Njadat");
sameLength("Sofyan" , "Car");
sameLength("Car" , "Car");



// Q11 //////////////////////
function largerNubmer(numX , numY) {
    if (numX > numY) {
        return numX ;
    }
    else{
        return numY ;
    }
}
console.log(largerNubmer(5 , 10));
console.log(largerNubmer(9 , 6));
console.log(largerNubmer(24 , 8));



// Q12 //////////////////////
function smallerNubmer(numA , numS, numD) {
    if (numA < numS && numA < numD) {
        return numA ;
    }
    else if (numS < numA && numS < numD) {
        return numS   
    }
    else {
        return numD
    }
}
console.log(smallerNubmer(5 , 10 , 20));
console.log(smallerNubmer(9 , 6 , 11));
console.log(smallerNubmer(24 , 8 , 2));



// Q13 //////////////////////
function shorterString(a, s, d, f, g) {
    let strings = [a, s, d, f, g];
    let shortest = strings[0];

    for (let i = 1 ; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    return shortest;
}
console.log(shorterString("air", "school", "car", "by", "github")); 
console.log(shorterString("air", "tr", "car", "by", "github")); 
console.log(shorterString("by", "tr", "car", "air", "github"));
console.log(shorterString("air","by","car","school","github"));
console.log(shorterString("air","tr","by","car","github"));
console.log(shorterString("air","tr","car","github","by"));



// Q14 //////////////////////
function longerString(s1 , s2 , s3 , s4) {
    let stringz = [s1 ,s2 ,s3 ,s4]
    let longest = stringz[0]
    
    for (let i = 0; i < stringz.length; i++) {
        if ( stringz[i].length > longest.length ) {
            longest = stringz[i];
        }
    }
    return longest

}
console.log(longerString("buy", "program", "car", "Sofyan"));
console.log(longerString("buy", "homee", "day", "Sofyan"));
console.log(longerString("diving", "car", "homee", "buy"));
console.log(longerString("car", "Sofyan", "homeless", "buy"));



// Q15 //////////////////////
function even(numbers) {
    
    if (numbers % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(even(1));
console.log(even(2));
console.log(even(3));



// Q16 //////////////////////
function odd(numbers) {
    
    if (numbers % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(odd(4));
console.log(odd(5));
console.log(odd(6));



// Q17 //////////////////////
function positive(numberz) {
        if (numberz > 0) {
            return numberz;
        } else {
        return Math.abs(numberz);
        }
    }
console.log(positive(4));
console.log(positive(-5));
console.log(positive(6));
console.log(positive(-9));



// Q18 //////////////////////
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Adam", "McCallen"));
console.log(fullName("Alex", "Mercer"));



// Q19 //////////////////////
function average(num11, num12, num13, num14, num15) {
    let avg = (num11 + num12 + num13 + num14 + num15) / 5 ;
    return avg;
}
console.log(average(1, 9, 7, 3, 6));
console.log(average(9, 5, 7, 4, 8));



// Q20 //////////////////////
function randomNumber() {
    return Math.random();
}
console.log(randomNumber());
console.log(randomNumber());



// Q21 //////////////////////
function randomBetweenNumbers(numZz, numXx) {
    return Math.random() * (numXx - numZz) + numZz;
}
console.log(randomBetweenNumbers(1, 8));
console.log(randomBetweenNumbers(3, 100));
console.log(randomBetweenNumbers(8, 24));




// Q22 //////////////////////
function scoreInUniversity(mark) {
    if (mark >= 95 && mark <= 100) {
        return "A";
    } else if (mark >= 85 && mark < 95) {
        return "B";
    } else if (mark >= 70 && mark < 85) {
        return "C";
    } else if (mark >= 50 && mark < 70) {
        return "D";
    } else if (mark >= 0 && mark < 50) {
        return "F";
    }
}
console.log(scoreInUniversity(96));
console.log(scoreInUniversity(3));
console.log(scoreInUniversity(71));



// Q23 //////////////////////
// let count = 0;
// function counter() {
//     count++;
//     return count;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// Q24 //////////////////////
var count = 5;
function counter() {
    count++;
    return count;
}

function resetCounter() {
    const lastCount = count;
    count = 9;
    return lastCount + " and the counter reset now";
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());






















