
// let x = 5;
// let y = 3;
// // сложение
// console.log('x + y = ', x + y);// 8

// // вычитание
// console.log('x - y = ', x - y);// 2

// // умножение
// console.log('x * y = ', x * y);// 15

// // деление
// console.log('x / y = ', x / y);// 1.6666666666666667

// // взятие остатка
// console.log('x % y = ', x % y);// 2

///////////////////////// Д\З №1

///////////////////////////
//Number
// BigInt 2^63-1
// String
// Boolean

//-Number
// let a = 5;
// let b = 3.7;
// let c = -10;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof a);

// let sum = a + b;
// console.log(sum);

//String 
// ',"",
// console.log('hello', typeof'hello');

// // Ivan Ivanov (30)

// let userName = 'Ivan';
// let userFamily = 'Ivanov';
// let userAge = '30';

// let userData = userName + ' ' + userFamily + ' ' + '(' + userAge + ')';

// console.log(userName, userFamily,'(',userAge,')');

// console.log(userName +  ' ' + userFamily + ' ' +'(' + userAge + ')');

// console.log (userData);
//////////////////////////////////////////////////////


// 
// let num1 = prompt('Enter number');
// let num2 = prompt('Enter number');

// console.log ('First number:', num1 );
// console.log ('Second number:', num2 );

// console.log('num1', typeof num1);
// console.log('num2', typeof num2);

// console.log(num1, '+' , num2, '=', num1 + num2);
// console.log(num1, '-' , num2, '=', num1 - num2);
// console.log(num1, '*' , num2, '=', num1 * num2);
// console.log(num1, '/' , num2, '=', num1 / num2);
// console.log(num1, '^' , num2, '=', num1 ** num2);

// console.log('5 + 5 = ' + (5 + 5));
// console.log(5 + 5);
// console.log('5' + 5);
// 


// let a = 5;
// let b = 'Hello';

// console.log(a + b);
// console.log(a * b);
// console.log (5 / 0);

// // Number, String 

// // let num1 = Number('5');
// // let num2 = Number('10');

// // let num1 = +'5';
// // let num2 = +'10';

// // let num1 = '5' * 1;
// // let num2 = '10' * 1;

// // let num1 = parseInt ('5');
// // let num2 = parseInt('10');

// // let num1 = parseFloat('5.23');
// // let num2 = parseFloat('10');

// let num1 = +prompt ('Num1');
// let num2 = +prompt('Num2');

// let res = num1 + num2;

// console.log(res);

// let num1 = 28;

// // num1 = String(num1);
// num1 = String(num1);

// console.log(num1, typeof num1);


// // >, <, >=, <=, ==, ===, !=, !==
// // Boolean true / false

// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 >= 6);
// console.log(5 != 6);
// console.log('Dima' == 'Dima');
// console.log('Dima' == 'dima');

// let a = 7;
// let b = 7;

// console.log ('a:', a, 'b:', b);

// if (a > b ) { 
//     console.log ('a > b');
// }

// if (a == b){
//     console.log('a == b');
// }

// if (a < b) {
//     console.log('a < b');
// }

//////////////////////////////////////
// let login = 'admin';
// let password = 'abc';

// let userLogin = prompt('Enter login');
// let userPwd;

// console.log('Saved login', login);
// console.log('Saved password', password);
// console.log('***************');

// if (userLogin === login) {
//     console.log('Login correct !!!');
//     userPwd = prompt('Enter password');

// if (userPwd === password) {
//     console.log ('Password correct !!!');
//     console.log('Access granted !!!');
// }
// } else {
//     console.log('Password fail !!!');
//     console.log('Access Denided !!!');
// }   {
//     console.log('login fail !!!');
//     console.log('Access Denided !!!');
// }

//////////////////////////////////////

// let a = 5;
// let b = '5';

// console.log (a == b);
// console.log (a ===  b);  // !==, !=

// D\Z №2
//////////////////////////////////////////
// var balance = 100.0; //основной баланс.

// function get_balance() {
//     alert('Ваш баланс: ' + balance);
//     atm();
// }

// function make_deposit() {
//     var deposit = parseFloat(prompt('сколько вы хотите положить?'));
//     if (isNaN(deposit) || deposit === '') {
//         alert('Error: please enter a number!');
//         make_deposit();
//     } else {
//         balance += deposit;
//         get_balance();
//     }
// }

// function make_withdrawal() {
//     var withdrawal = parseFloat(prompt('Сколько вы хотите вывести?'));
//     if (isNaN(withdrawal) || withdrawal === '') {
//         alert('Error: please enter a number!');
//         make_withdrawal();
//     } else {
//         balance -= withdrawal;
//         get_balance();
//     }
// }

// function error() {
//     alert('Error: accepted numbers are 1 through 4.');
//     atm();
// }

// function exit() {
//     var confirm_leave = confirm('Выйти.');
//     if (confirm_leave) {
//         window.close();
//     } else {
//         atm();
//     }
// }

// function atm() {

//     var choice = parseInt(prompt('Select a choice 1.) Балансы 2.) Депозит  3.) Вывести 4.) Выйти')); //prompt user for choice.

//     if (choice === 1) {
//         get_balance();
//     } else if (choice === 2) {
//         make_deposit();
//     } else if (choice === 3) {
//         make_withdrawal();
//     } else if (choice === 4) {
//         exit();
//     } else {
//         error();
//     }
// }

// atm();

////////////////////////////////////////////////////
// D\Z №2

// let num1 = 10;
// let num2 = -3;
// let num3 = 0;

// console.log (num1, Boolean(num1));
// console.log (num2, Boolean(num2));
// console.log (num3, Boolean(num3));

// let str1 = 'a';
// let str2 = 'adfasdfa';
// let str3 = ' ';
// let str4 = '';

// console.log(str1, Boolean(str1));
// console.log(str2, Boolean(str2));
// console.log(str3, Boolean(str3));
// console.log(str4, Boolean(str4));

// // null, undefined
// console.log('null', typeof null);
// console.log('undefined', typeof undefined);

// let userName;
// console.log(userName);

// console.log ('null', Boolean(null));
// console.log('undefined', Boolean(undefined));


// // let money = prompt('enter summ');

// // if (money !== '') {
// //     money = Number(money);
// } else {
//     alert('wrong type');
// }

// && (AND) * ;
// ||  (OR) + ;
// ! (NOT)

// let login = 'admin';

// if (login !== '' && login === 'admin') {
//     console.log ('OK');
// } else {
//     console.log('fail');
// }

// let userAge = 70;
// if (userAge >= 18 && userAge <= 60) {
//     console.log('OK');
// } else {
//     console.log('fail');
// }

// // admin, root 
// login = 'Dima';
// if (login === 'admin' || login === 'root') {
//     console.log('admin || root');
// } else {
//     console.log('wrong login');
// }


// let bool1 = true;
// let myStr = 'Dima';

// console.log(!bool1);
// console.log (!myStr);

// console.log(Boolean(myStr));
// console.log(!!myStr);

/* true - 1/ false - 0
&&
1   &  1     -> 1
true && true -> true
0     *  1     -> 0
false && false -> false
*/

/*
|| +
1    +  1    -> 2
true || true -> true
1     +  0    -> true 
true || false -> true 
0    +  0    -> 0 
*/

//while, for
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// let counter = 0;

// while (counter < 10) {
//     console.log(counter);

//     counter ++;
// }

// let num = 10;
// let userNum;

// while (true) {
//     userNum = +prompt('Enter num');
//     if (userNum > num) {
//         console.log('>');
//     } else if (userNum < num ) {
//         console.log('<');
//     } else {
//         console.log('Ви загадали число:', num);
//         break;
//     }
// }

// let userChoose = null;

// while(userChoose !== 'exit') {
//     userChoose = prompt('1. Add, 2. Remove, exit: exit');
//     if ( userChoose === '1') {
//         console.log('Add');
//     }
//     if ( userChoose === '2') {
//         console.log('Remove');
//     }
//     if ( userChoose === 'exit') {
//         console.log('by-by');
//     }
// }

// console.log('End of progaramm');

//////////////////////// D\Z №3
var userChoice = prompt("Please make a choice: rock, paper or scissors? What's your choice?")
var compare = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        var userChoice = prompt("Computer choice is the same as yours! The result is a tie! What's your new choice?");
    }



    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
compare(userChoice, computerChoice)
console.log("Computer choice is: " + computerChoice);
console.log("User choice is: " + userChoice);
console.log(compare(userChoice, computerChoice));
///////////////////////// D\Z №3