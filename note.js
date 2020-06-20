// ------- Data types: Primitive ------- //

var myAge = 15;            // Number
var myName = 'Sazzad'      // String
var i_am_a_student = true; // Boolean
var myG$;                  // Undefined
var space = null;          // Null

// ------- Variable mutation and Type coercion ------- //

var random = 50; random = 51;            // Variable mutation  => Changing variables several times.
var typeCoercion = myName + ' ' + myAge; // Type coercion => When Javascript automatically converts DataTypes to string.

// ------- Basic Operators ------- //

// -- Math operators -- //
var a, b, x;

x = a + b; x = a - b;
x = a * b; x = a / b;

// -- Logical operatiors -- //

var num1 = 2, num2 = 5, bool;
bool = num1 > num2;

// ------- If and else statement ------- //

var guy1 = 'Inu', guy2 = 'Minu';
var introducer = guy1, intro;

if (introducer === guy1) {
    intro = 'Good boy';
} else if (introducer === guy2) {
    intro = 'Bad boy';
} else {
    intro = 'Hello...';
}

// ------- Boolean Logic ------- //

var yourName = 'Boltu';
var age = 31;
var result;

// --- AND operator --- //
if (age > 0 && age < 13) {
    result = 'He is a boy';
}

// --- OR operator --- //
else if (age === 13 || age === 19) {
    result = 'He is a teenager'
}

// --- NOT operator --- //
!(2 > 5); // Inverts to true!!

// ------- Ternary operator ------- //

result = age >= 20 ? 'He is a man' : 'Can\'t be defined';

// ------- Switch statement ------- //

var yourJob = 'Developer';
var greet;
switch (yourJob) {
    case 'Developer':
    case 'Programmer':
        greet = 'Hi developer!'
        break;
    case 'Teacher':
        greet = 'Hello sir!'
        break;
    default:
        break;
}

// ------- Falsy values: undefined, null, false, 0, '', NaN
// ------- Truthy values: Non-falsy values

var aNumber = null;

var test = aNumber ? 'Defined' : 'Undefined';

// ------- Equality operators ------- //

var number = 15, string = '15';
number == string;  // true => Compare the text, not the dataType
number === string; // false => Compare the text as well as dataType

// ------- Functions ------- //

// --- Function declaration --- //
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    var retirement = 65 - calculateAge(birthYear);
}

// ------- Function Statements and Expression ------- //

/* Those functions, they dosen't return
   anything called Function Statement */
function square(y) {
    y * y;
}

/* Those functions, they returns
   a value called Function Expression */
var whatDoYouDo = function (job) {
    switch (job) {
        case 'Developer':
        case 'Programmer':
            return 'Hi developer!';
        case 'Teacher':
            return 'Hello sir!';
        default:
            break;
    }
}

// ------- Arrays ------- //

// --- Initialize new array --- //
var names = ['John', 'Jane', 'Jack'];
var years = new Array(1999, 2000, 2001);

// --- Mutate array data --- //
names[1] = 'Jordy';
names[names.length] = 'Mary';

// --- Specific methods for array --- //

names.push('Jonathon'); // Add a value to the end of the array
names.unshift('Jackob') // Add a value to the beginning of the array
names.pop();            // Remove array from the end
names.shift();          // Remove array from the beginning
names.indexOf('Jane');  // Identify the position of a value in array

// ------- Objects and Properties ------- //

// --- Object Declaration: literal --- //

var john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 26,
    birthYear: 1992,
    family: ['Mark', 'Jane', 'Bob'],
    isMarried: false
};

// --- Object Declaration: new Object() Syntax --- //

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Mary';
jane['birthYear'] = 1999;

// --- Access Object Properties --- //

var accessObjPro = john.firstName;
var accessObjPro = john['lastName'];

// ------- Objects and Methods ------- //

var mark = {
    firstName: 'Mark',
    birthYear: 1990,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

mark.calcAge();

// ------- Loops and Iteration ------- //

// --- for() loop --- //

for (var i = 0; i < 10; i++) {
    var x = i;
}

// --- while() loop --- //

var i = 0;
while (i < 10) {
    var x = i;
    i++;
}

// --- continue and break statement --- //

var tuhin = ['Sazzad', 'WebDeveloper', 2005, 'blue']

// --- continue --- // => when the condition is true, that avoid all the next iterations and continues from the next loop

for (i = 0; i < tuhin.length; i++) {
    if (typeof tuhin !== '') continue;
    // console.log(tuhin[i]);
}

// --- break --- // if the condition is true, compiler leave the loop completely.

for (i = 0; i < tuhin.length; i++) {
    if (typeof tuhin !== '') break;
    // console.log(tuhin[i]);
}

// ------- Function: Constructor ------- //

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2016 - this.yearOfBirth);
    }
}

// --- Make a property Inherited --- //
Person.prototype.schoolName = 'Kamarjuri Yousuf Ali High School';

// ------- Object.create ------- //
var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var myself = Object.create(personProto);
myself.name = 'John';
myself.yearOfBirth = 1990;
myself.job = 'teacher';

var herSelf = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1991 },
    job: { value: 'Artist' }
});

// ------- Objects vs. Primitives ------- //
// Primitives copy the value what we are given this
var prim1 = 9;
var prim2 = prim1;

// Objects reference the value what we are given this
var obj1 = { num: 9 };
var obj2 = obj1;

// Last Example
var prim = 27;
var obj = { name: 'Jonas' }

function change(a, b) {
    a = 30;
    b.name = 'Sazzad';
}

// ------- Passing argument as a function ------- //
function arrayCalc(array, fn) {
    var yearArr = [];
    for (var i = 0; i < array.length; i++) {
        yearArr.push(fn(array[i]));
    }
    return yearArr;
}

function ageCalc(el) {
    return 2020 - el;
}

var year = [1999, 1978, 2006];

var result = arrayCalc(year, ageCalc);

// ------- Functions returning function ------- //

function interviewQuestion(job) {
    if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else if (job === 'designer') {
        return function (name) {
            console.log('Do you know what is UX design, ' + name + '?');
        }
    } else {
        console.log('Sorry, there is no job for you in our company.');
    }
}

var designerQuestion = interviewQuestion('teacher');

designerQuestion('Sazzad');
designerQuestion('Sakib');
designerQuestion('Tanzim');
designerQuestion('Zubayer');

interviewQuestion('designer')('Boltu');

// ------- IIFE: Immedietely Invoked Function Expressions ------- //

(function (num) {
    var myAge = num;
    console.log(myAge);
})(8);

// ------- Closures ------- //
function retirement(retirementAge) {
    var a = 'years left until retirement.';

    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(65)(2006); // Outer function's variables and parameters are still working
// in inner functions!! And this is closure.

// ------- Function's method: Call, Bind, Apply ------- //

var jack = {
    name: 'Jack',
    age: 26,
    job: 'designer',
    presentation: function (style) {
        if (style === 'formal') {
            console.log('Hi, I\'m ' + this.name + '. I\'m a ' + this.job + '.');
        } else if (style === 'friendly') {
            console.log('Hey! guys, I\'m ' + this.name + '. I\'m ' + this.age + ' years old.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 25,
    job: 'artist'
}

// --- Call: sharing methods with other objects
jack.presentation('formal');
jack.presentation.call(emily, 'formal');

// --- Apply: similar to call method
jack.presentation.apply(emily, ['formal']); // that dosen't work because our function
// don't expect any array...   

// --- Bind: similar to call method but its return a copy of the binded function
var emilyFriendly = jack.presentation.bind(emily); // You can pass arguments for later
emilyFriendly('friendly');

// ---------- ES6 Features ------------ //

// ----Variable initializer
// ES5
var name = 'Sazzad'; // Fn-scoped
// ES6
let name = 'Ahmed'; // Block-scoped
const pie = 3.1416; // Constant var

// ----Blocks and IIFEs
// We can just write a block. Code inside of the block cant accessable from outside.
// So, this is a replacement of IIFEs
{
    let a = 5;
    const b = 7;
    var c = 9; // But var is accessable from outside as they are fn-scoped
}

// ----Strings: Template literal
// ES5
var note = 'Hi ' + 'I\'m ' + c + ' years old';
// ES6
let note = `Hi I'm ${c} years old`;
// With a bunch of method
note.startsWith(`H`);
note.includes(`o`);
note.endsWith(`a`);
note.repeat(5);     // Repeats the string 'a'a'a'a'a'

// ----Arrow Function
var a = [1, 2, 3];
// ES5
var numbers = a.map(function param(el) {
    return 10 - el;
});
// ES6
let copyOfA = a.map(el => 10 - el);
copyOfA = a.map((el, index) => `Hello ${index + 1}: ${10 - el}`);

// ----Destructuring
// ES5
var name = 'Sakib';
var age = 20;
// ES6
let [name, age] = ['Sakib', 26];

let sakib = {
    firstName: 'Sakib',
    lastName: 'Ahmed'
}

let { firstName, lastName } = sakib;

function calcRetirementAge(year) {
    var age = new Date().getFullYear - year;
    return [age, 60 - age];
}

const [sakibAge, retirementAge] = calcRetirementAge(1999);

// ----Arrays: with a bunch of method
// Transform a nodelist into array
// ES5
Array.prototype.slice.call(nodeList);
// ES6
Array.from(nodeList);

// Extra two features
// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
    return cur >= 18;
});

var positionOfFull = full.indexOf(true);
var ageOfFull = ages[full.indexOf(true)];

// ES6
let fullAgePos = ages.findIndex(cur => cur >= 18);
let ageOfFullAgePos = ages.find(cur => cur >= 18);

// ----for loop: breaks and continue
// ES5
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j <= 20; j++) {
    if (numList[j] / 2 !== Math.floor(numList[j] / 2)) {
        continue;
    }

    console.log(numList[j]);
}

// ES6: forof
for (const cur of numList) {
    if (cur / 2 !== Math.floor(cur / 2)) {
        continue;
    }

    console.log(cur);
}

// ----Spread Operator
function addThreeNum(a, b, c) {
    return a + b + c;
}

// ES5
var nums = [10, 15, 18];
var sum1 = addThreeNum.apply(null, nums);

// ES6
let sum2 = addThreeNum(...nums);

// Joining two arrays into one var
let fruits = ['Mango', 'Lechee', 'Orange'];
let foods = ['Bread', 'Milk', 'Egg'];
let edibles = [...fruits, 'Banana', ...foods];

// Also used in nodelist

// ---- Rest Parameters
// ES5
function isfullAge1(limit) {
    var argsArr = Array.prototype.slice(arguments, 1);

    return argsArr.forEach(function (cur) {
        2020 - cur >= limit;
    });
}

// ES6
function isfullAge2(limit, ...years) {
    return years.forEach(function (cur) {
        2020 - cur >= limit;
    });
}

// ----Default parameters
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

// ES6
function AhmedPerson(firstName, yearOfBirth, lastName = 'Ahmed', nationality = 'Bangladeshi') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

// ---- Maps
const question = new Map();

// Set key and values in any datatype
question.set('question', 'What is Sundarban?');
question.set(1, 'Beach');
question.set(2, 'Forest');
question.set(3, 'City');
question.set(4, 'Village');
question.set('correct', 2);
question.set(true, 'Correct');
question.set(false, 'Wrong');

// Get value
question.get('question');

// Dignose the length
var lengthOfQuiz = question.size;

// Delete a key
// check if it has the key
if (question.has(4)) {
    question.delete(4);
}

// Delete whole map
question.clear();

// We can use forEach, forOf method in map but not in object

// ---- Classes
// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}


// ES6
class Person6 {
    constructor(name, year, job) {
        this.name = name;
        this.yearOfBirth = year;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hello');
    }

    // Only inherited for Person6: Object().
}

// ----Classes with subclass
// ES5
var Athletes5 = function (name, year, job, olympicGames, medals) {
    Person5.call(this, name, year, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athletes5.prototype = Object.create(Person5.prototype);

// ES6
class Athletes6 extends Person6 {
    constructor(name, year, job, olympicGames, medals) {
        super(name, year, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
}

// ------- Asynchronus Javascript ------- //
// synchronus js
const second = () => {
    console.log('Second');
}

const first = () => {
    console.log('Hey there!');
    second();
    console.log('The end');
}

first();

// Asynchronus JS
const second = () => {
    setTimeout(() => {
        console.log('Async');
    }, 2000);
}

const first = () => {
    console.log('Hey there!');
    second();
    console.log('The end');
}

first();

// ------- Promises ------- //
// Normal asynchronus code
let getReciepe = () => {
    setTimeout(() => {

        let IDs = [20, 29, 12, 32];
        console.log(IDs);

        setTimeout(() => {

            let reciepe = {
                title: 'Fresh Noodles',
                publisher: 'Sazzad'
            };
            console.log(`${IDs[1]}: ${reciepe.publisher}`)

            setTimeout(publisher => {

                let reciepe2 = {
                    title: 'Egg Omlete'
                }
                console.log(`${reciepe2.title}: ${publisher}`);

            }, 1500, publisher)

        }, 1500)

    }, 1500)
}

// Promise method

// Produce
var getIDs = new Promise((res) => {
    setTimeout(() => {
        res([20, 13, 39, 16]);
    }, 1500)
});

var getRec = recId => new Promise((res) => {
    setTimeout(() => {
        const reciepe = {
            title: 'Veg soup',
            publisher: 'Sazzad'
        };
        res(`${recId}: ${reciepe.title}`);
    }, 1500);
})

var getRel = publisher => new Promise((res) => {
    setTimeout(() => {
        const reciepe = {
            title: 'Chicken Noodles'
        };
        res(`${reciepe.title} by ${publisher}`);
    }, 1500);
})

// Consume
getIDs
.then(IDs => {
    console.log(IDs);
    return getRec(IDs[2]);
})
.then(reciepe => {
    console.log(reciepe);
    return getRel('Sazzad')
})
.then(related => {
    console.log(related);
});

// Async/Await: alternative for consume Promise
async function getReciepeAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const reciepe = getRec(IDs[2]);
    console.log(reciepe);
    const related = getRel('Sazzad');
    console.log(related);
}

getReciepeAW().then(reciepe => console.log(reciepe));
