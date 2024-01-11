//-------------------Task 1 : Factorial--------------------//

let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial); // Output : 120

//-------------------Task 2  How many digits ? --------------------//

let number = 1765;
let count = 0;
if (number === 0) {
  count = 1;
} else {
  while (number >= 1 || number <= -1) {
    number = number / 10;
    count++;
  }
}

console.log("Nombre de chiffres : " + count);

//-------------------Task 3 Time to draw ! --------------------//

let hauteur = 4;

for (let i = 1; i <= hauteur; i++) {
  let ligne = "";

  for (let ee = 1; ee <= hauteur - i; ee++) {
    ligne += " ";
  }
  //  les étoiles
  for (let e = 0; e <= 2 * i - 1; e++) {
    ligne += "*";
  }
  console.log(ligne);
}
//  le tronc
let espacesTronc = "";
let tronc = "|";
for (let l = 0; l <= hauteur - 1; l++) {
  espacesTronc += " ";
}
let = resultTronc = espacesTronc + tronc;
console.log(resultTronc);

//-------Functions & Reusability: Task 1 : Going back in Time ! --------------------//
// 1-factorial (n)//
function calculateFactorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}
let result = calculateFactorial(num);
console.log(result);

// 2-nDigits(number) :
function countDigits(number) {
  let count = 0;

  if (number === 0) {
    count = 1;
  } else {
    while (number >= 1) {
      number = number / 10;
      count++;
    }
  }

  return count;
}

let numb = 123542;
let resultat = countDigits(numb);
console.log("Nombre de chiffres : " + resultat);

// 3-numberToDay(number) ://

function numberToDay(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
}

let day = 2;
let resultt = numberToDay(day);
console.log(resultt);

// 4--------------//

function max(c, d, e) {
  let max;
  if (c > d && c > e) {
    max = c;
  } else if (d > c && d > e) {
    max = d;
  } else {
    max = e;
  }
  return max;
}

console.log(max(-15, 6, 12));

//5-myGrade(score)//

function myGrade(score) {
  if (score >= 0 && score <= 100) {
    if (score >= 85) {
      return "A";
    } else if (score >= 70) {
      return "B";
    } else if (score >= 55) {
      return "C";
    } else if (score >= 40) {
      return "D";
    } else if (score >= 15) {
      return "E";
    } else {
      return "F";
    }
  } else console.log("invalid score");
}

console.log(myGrade(-12));

// -------------------Task 2 : The Extended Factorial----------------------//
function cpn(n, p) {
  let c = 1;
  c =
    calculateFactorial(n) / (calculateFactorial(p) * calculateFactorial(n - p));

  return c;
}
console.log(cpn(5, 2));

// ---------Task 3 :  The Calculator-------------//
function Calculator(x, opp, y) {
  switch (opp) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
    case "/":
      if (y === 0) {
        console.log("error");
      } else {
        console.log(x / y);
      }
      break;

    case "%":
      console.log(x % y);
      break;
    case "c":
      console.log(cpn(x, y));
      break;

    default:
      console.log("invalid opperator");
      break;
  }
}
console.log(Calculator(6, "/", 0));
