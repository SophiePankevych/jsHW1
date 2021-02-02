// - Створити змінні.
// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let first = 1;
// let ten = 10;
// let nine = -999;
// let one = 123;
// let cons = 3.14;
// let two = 2.7;
// let six = 16;
// let tr = true;
// let fa = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello, owu, com, ua, first, ten, nine, one, cons, two, six, tr, fa);
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(first);
// alert(ten);
// alert(nine);
// alert(one);
// alert(cons);
// alert(two);
// alert(six);
// alert(tr);
// alert(fa);
// document.write(hello)
// document.write('<br/>')
// document.write(owu)
// document.write('<br/>')
// document.write(com)
// document.write('<br/>')
// document.write(ua)
// document.write('<br/>')
// document.write(first)
// document.write('<br/>')
// document.write(ten)
// document.write('<br/>')
// document.write(nine)
// document.write('<br/>')
// document.write(one)
// document.write('<br/>')
// document.write(cons)
// document.write('<br/>')
// document.write(two)
// document.write('<br/>')
// document.write(six)
// document.write('<br/>')
// document.write(tr)
// document.write('<br/>')
// document.write(fa)

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// hello = 'hi';
// owu = 'OWU';
// com = 'mail';
// ua = 'ru';
// first = 2;
// ten = 110;
// nine = -321;
// one = 235;
// cons = 3.4;
// two = 2.2;
// six = 23;
// tr = false;
// fa = true;
// console.log(hello, owu, com, ua, first, ten, nine, one, cons, two, six, tr, fa);
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(first);
// alert(ten);
// alert(nine);
// alert(one);
// alert(cons);
// alert(two);
// alert(six);
// alert(tr);
// alert(fa);
// document.write(hello)
// document.write('<br/>')
// document.write(owu)
// document.write('<br/>')
// document.write(com)
// document.write('<br/>')
// document.write(ua)
// document.write('<br/>')
// document.write(first)
// document.write('<br/>')
// document.write(ten)
// document.write('<br/>')
// document.write(nine)
// document.write('<br/>')
// document.write(one)
// document.write('<br/>')
// document.write(cons)
// document.write('<br/>')
// document.write(two)
// document.write('<br/>')
// document.write(six)
// document.write('<br/>')
// document.write(tr)
// document.write('<br/>')
// document.write(fa)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('Whats your name?');
// let fathersName = prompt('Whats your fathers name?');
// let age = prompt('How old are u?');
// document.write('Вітаю ' + name + ' ' + fathersName + '. Тобі ' + age + ' років.');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let name = prompt('Whats your name?');
// let fathersName = prompt('Whats your fathers name?');
// let age = prompt('How old are u?');
// document.write('Вітаю ' + name + ' ' + fathersName + '. Тобі ' + age + ' років.');

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS").
// Вивести їх в консоль.
// let firstNumber = prompt('Enter first num');
// let secondNumber = prompt('Enter second num');
// let thirdNumber = prompt('Enter third num');
// console.log(parseInt(firstNumber));
// console.log(parseInt(secondNumber));
// console.log(parseInt(thirdNumber));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt.
// Додати їх всіx мiж собою і результат вивести в консоль.
// let firstNumber = parseInt(prompt('Enter first num'));
// let secondNumber = parseInt(prompt('Enter second num'));
// let thirdNumber = parseInt(prompt('Enter third num'));
// let fourthNumber = parseInt(prompt('Enter fourth num'));
// let sum = firstNumber + secondNumber + thirdNumber + fourthNumber;
// console.log(sum);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let firstNumber = parseFloat(prompt('Enter first round num'));
// let secondNumber = parseFloat(prompt('Enter  second round num'));
// let thirdNumber = parseFloat(prompt('Enter  third round num'));
// let result = firstNumber + secondNumber + thirdNumber;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою.
// Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let firstNumber = Math.round(prompt('Enter first round num'));
// let secondNumber = Math.round(prompt('Enter second round num'));
// let thirdNumber = Math.round(prompt('Enter third round num'));
// let sum = firstNumber + secondNumber + thirdNumber;
// console.log(sum);

// - За допомогою prompt() отримати 2 цілих числа.
// //     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// //     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// //     Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let firstNumber = prompt('Enter first round num');
// let secondNumber = prompt('Enter second round num');
// console.log(Math.pow(firstNumber, secondNumber));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставте відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразах не використовувати однакові оператори!!!
// 5 <= 6 -> true
// 5 > 6 -> false
// 5 = 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); => false
// console.log(34 > 33 && 23 < 90 ); => true
// console.log(99 > 100 && 45 > 12 ); => false
// console.log(132 > 100 || 45 < 12 ); => true
// console.log(111 > 11 || 45 < 111 ); => true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); => true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); => true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); => false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); => true
// console.log(!!'-1'); => true
// console.log(!!-1); => true
// console.log(!!'0'); => true
// console.log(!!'null'); => true
// console.log(!!'undefined'); => true
// console.log(!!(3/'owu')); => false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); => true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); => false
