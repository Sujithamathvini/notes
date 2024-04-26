#work, #webdev, #frontend, #javascript, #js
444444
# JS architecture
### Node js - is a v8 engine

# Primitives
1. numbers
```javascript
var a=10
```
2. string
```javascript
var a="suji"
```
3. arrays
```javascript
var a=[1,2,6,3,4] // same type
var b=[1,2.3, 4,"suji"] // different type
```

4. Objects : key-value pair
```javascript
var obj={
    name:"suji",
    age:21,
    Edu:B.E
}
```

# functions
- sending functions as arguments ( function sent to another function )

# Javascript important concepts
## single threaded
- A single-threaded language is a language that uses only one thread.
- JavaScript is single-threaded, so it executes the current line of code before moving to the next.
## Loosely typed
- for example : datatypes are not mentioned for the variables
- reason : small errors can come but still the programs which are error-free should be executed
## Interepted
- compiler complies line-by-line
## Native JS vs APIs
## Asynchronous
- An asynchronous function will not block the execution of other functions in the call stack.
- It enables the program to ==run other tasks and not to wait until that long-running task has finished== ( when the long-running task finishes the output will be shown )
```javascript
console.log('Hey,'); // 1st
setTimeout(() => {
  console.log('I am John'); // 3rd
}, 1000);
console.log('Bye now'); // 2nd
```
# Asynchronous Javascript
## event loop
![image.png](https://supernotes-resources.s3.amazonaws.com/image-uploads/fbc4c679-aaf4-4223-a468-7caf5b8f9f56--image.png)
## callbacks
- a ==func which calls another func==
- a function that is executed ==after it parent function finishes its execution.==
- this func is sent as an argument to the another function
```javascript
setTimeout(print,1000) // parent func - setTimeout
function print(){ // child func - print
    console.log("name")
}
```
## Promises
- promises are used to handle asynchronous operations in js. Its a constructor which has a callback function where all the operations are performed. In that callback function it has 2 arguments which are,
    - resolve - if the operations performed we can call ".then"
    - reject - if the operations didn't perform we can call ".catch"

### example 1
```javascript

```


# word vs keyword
# interpreter vs compiler
## interpreter(line by line): 
- converts programming lang to byte code, which is converts fastly but executes slowly
## compiler(whole code) : 
- converts programming lang to machine code, which converts slowly but executes fastly
## JIT - Just In Time compiler : 
- Its a dynamic compilation, which is a combination of interpreter and compiler
# var let const

## the difference
- JS has 2 versions : ES5 - old - only var
- ES6(new)(let and const), we use both ES5 + ES6
### var                                                                      
1.ES5                                                                                    
2.its function scope                                        
```javascript
function abcd(){                          
    for(var i=1;i<12;i++){                  
        // some code u do here                
    }                                       
    console.log(i); // output - 12          
}
```
3.it adds itself to the window object
```javascript
var a=12; // in browser console type 'window', you will see a=12
let b=14; // in browser console type 'window', you will not see b=14
```

### let
1.ES6
2.its braces scope
```javascript
function abcd(){
	for(let i=1;i<12;i++){
	// some code u do here
	console.log(i); // output - undefined
	}
}
```
3.doesn't adds itself to the window object

### const
1.ES6
2.its braces scope
3.doesn't adds itself to the window object

# window object 👀
- 🔥Def: The global object of JavaScript in the web browser is the window object. It means that all variables and functions declared globally with the var keyword become the properties and methods of the window object
```javascript
var counter = 1;
var showCounter = () => console.log(counter);
console.log(window.counter); //  1
window.showCounter();// counter 1
```

# browser context api 👀
- (this only gives windows object as a feature)

# stack
- LIFO: Last in first out
- Static memory allocation
- used to store primitive datatype and values like numbers, boolean, string....
- 🔥size is known at compile time

# heap memory
- Dynamic memory allocation
- used to store objects, functions, arrays
- 🔥the size is known at run time, bcz of that there is no limit to the amount of memory

# execution context
- 🔥execution context is a container that is created when a function is called and that function executed in that container, it contains 3 things in it :
    1. variables
    2. functions
    3. lexical environment)

# lexical environment
- 🔥lexical environment is a data structure that holds an identifier-variable mapping(identifier means variables/functions)
- In short it holds the scope and scope chains of the variable and functions

# hoisting
- 🔥Def: moving all the variables and functions to the top of the scope piror to the execution of code
- using the variable before its been created in program normally gives not defined
- but in javascript, the 'var' declared anywhere in the program is moved to top of the scope and it gives output as undefined, see below for eg
```javascript
					 javascript interpreter/working :
console.log(a);      // output : 12
var a=12;            // since JS has hoisting where a=12 is move up/front
```
- conclusion: the var declarations are moved to the top of the scope before the execution

# type in js
- primitives: var does not have [] () {}
- reference: var which has [] () {}
- in refernce type, if copied, only the reference is copied i.e., the address is copied

# how to copy reference's value (using spread operator)
1. b=a
```javascript
var a=[1,2,3,4,5];
var b=a; // address of a is copied to b. So both point to same array
b.pop(); // a=[1,2,3,4]; b=[1,2,3,4]
// here the address(reference) of 'a' copied to 'b'. So any change in 'b' will affect 'a'.
```

2. spread operator
```javascript
var a=[1,2,3,4,5];
var b=[...a]; // this is a spread operator, which allows to copy the values rather than copying or pointing the same address
b.pop(); // a=[1,2,3,4,5]; b=[1,2,3,4]
// here the values of 'a' copied to 'b' not the address(reference). So any change in 'b' will not affect 'a'.
```
# truthy vs falsy
- falsy values are : 0 false undefined null NaN document.all
- truthy values are : other than all those falsy values others are truthy

# || - OR operator
- it can be used when we need to show something other than 'false' in the output for a condition
```javascript
1>2 || "paisa" \\ output : 'paisa'
1>2 || null \\ output : null
```

# For loops
## forEach forin forof do-while
### forEach
- in foreach loop it doesn't change the values of the array 'a', but it creates a temporary copy of the array's values in 'val' and changes it
```javascript
var a=[1,2,3,4,5];
a.forEach(function(val){
    console.log(val+2); // 3 4 5 6 7
});
console.log(a); // 1 2 3 4 5
```
### forin
```javascript
var obj={
    name: "suji",
    age: "21",
    city: "trichy"
};
for (var key in obj){
    console.log(key); // to print keys in object 'obj' // name age city
}

for (var key in obj){
    console.log(obj[key]); // to print values in object 'obj' // suji 21 trichy
}
```

# functions
## callback functions
- 🔥Its a functions that needs to be executed after another function has finished execution
- 🔥Its a function passed as an argument to another function, and is called after executing the main/parent function has finished execution

## first class function
- 🔥These are functions that are treated like other variables. So, the functions can be assigned to other variable or passed as an argument or returned by another function.
### example 1
```javascript
function abcd(a){
    a(); // since a = function(){console.log("hello")};
}

abcd (function(){console.log("hello");}); // calling abcd function
```

### example 2
```javascript
var b = function abcd(a){
    a(); // since a = function(){console.log("hello")};
}

b (function(){console.log("hello");}); // calling abcd function
```


## arguments
- var that sends value through by calling function
## parameters
- values are stored in them which is send by arguments

## normal function code :
### example 1 :
```javascript
let func = function(){
    return "welcome bro"
}
console.log(func()) // output : welcome bro
```

### example 2 :
```javascript
let func = function(name){
    return "welcome"+name
}
console.log(func("suji")) // output : welcome suji
```

## arrow function
### example 1 :
```javascript
let func = () => "welcome bro"
console.log(func()) // output : welcome bro
```

### example 2 :
```javascript
let func = name => "welcome"+name
console.log(func("suji")) // output : welcome suji
```

## higher order funcs
- higher order funcs are funcs which accepts a func in a parameter or return a function or both
- example : 'for each' method always takes another func inside it. So for each is a higher order func
### example 1 :
```javascript
function abcd(val){
    // here a func is sent as a parameter, so abcd is a higher order func
}
abcd(function(){});
```

### example 2 :
```javascript
function abcd(){
    return function(){};
    // here a function is return when calling the higher order func (abcd)
}
abcd();
```

## constructor funcs
- a special function that creates and initalizes an object instance of a class

## pure & impure funcs
### impure function : (opposite of 'pure' is 'impure')
1. it should always return same output for same input
-👩‍💻opposite code : (impure)
function abcd(val){
    return Math.random()*val;
}
var ans1 = abcd(2); // 2.34554354 it gives some number
var ans2 = abcd(2); // 1.23276596 it gives some number

2. it will never change/update the value of a global variable
-👩‍💻opposite code : (impure)
var globalvar = 12;
function abcd(a,b){
    globalvar = 24; //here it changes the global variable
    return a*b; // 8
}
abcd(2,4);

### pure function
1. it should always return same output for same input
2. it will never change/update the value of a global variable
```javascript
function abcd(a,b){
    return a*b;
}
var ans1 = abcd(2,4); //8
var ans2 = abcd(2,4); //8

```
# arrays

## push
- inserts value at the end of the arrays
## pop
- removes the value at the end of the array
## unshift
- to insert value at starting of the array
## shift
- used to remove the value at starting of the array
## splice
- to remove or replace the elements in array
 1. arr.splice(position,howmany to remove after that position)
 2. arr.splice(position, howmany elements to remove after from the inserting position, inserting elements, inserting elements)
## example
```javascript
var a=[1,2,3,4,5];
a.push(6); // 1,2,3,4,5,6
a.pop(); // 1,2,3,4,5
a.unshift(7); // 7,1,2,3,4,5
a.shift(); // 1,2,3,4,5
a.slpice(2,2); //1,2,5
(or) a.splice(1,1,3,4,6); //1,3,4,6,2,5 -> 1,3,4,6,5
(or) a.splice(1,2,3,4,6); //1,3,4,6,2,5 -> 1,3,4,6
```


## how arrays are made behind the scenes
- arrays are made as object
- so, when we check
   typeof [] // it says 'object'
- to find if its arrays or not, do below thing
```javascript
Array.isArray([]) // output : true
Array.isArray({}) // output : false
```

- behind the scenes :
```javascript
var a = [1,2,3,4,5];
//bts
/*
a = {
	0 : 1;
	1 : 2;
	2 : 3;
	3 : 4;
	4 : 5;
}
*/
```

## negative indexes in arrays in js
### example
```javascript
var a = [1,2,3,4,5];
a[-1]=6;
a[-2]=7;
console.log(a); // output : [1,2,3,4,5,-1:6,-2:7]
// to understand the output see above "how arrays are made behind the scenes"
```

## join method
- this method returns an array as a string and any separator can be specified
```javascript
var a = [1,2,3,4];
console.log(a.join("-")) // output : 1-2-3-4
```


# objects
- Its a non-primitive datatype, that allows to store multiple collections of data. Each member in an object is a key:value pair seperated by commas.
- to access the type of obj : varname.type -> output : automatic
## blank object
```javascript
var a={};
```
## filled object : 
```javascript
var a={ age:24, name:"Sham", job:"IT"};
```

## objects are mutable
- copying an object to another object is done by referencing, so if one object is changed another abject is also affected

## property vs methods
- var a={ age:24, name:"Sham", job:function(){xxdsa}};
- here age,name : property and job : methody bcz it contains a function

## updating obj props
- to change the value of name then
```javascript
var a={ age:24, name:"Sham", job:"IT"};
a.name="sundar";
// now, var a={ age:24, name:"sundar", job:"IT"};
```

## delete obj property (use - delete objname.key)
```javascript
var a = {
    name : "suji";
    age : 21;
}
delete a.age;
console.log(a); // output  : {name: 'suji'}
delete a.name;
console.log(a); // output  : {}
```

## prototype
- every object in js has a built-in properties and methods which is called prototype
```
[[prototype]] contains these built-in properties and methods
```
- example :
if we want to find length of array(its also an object) we use '.length' which is a built-in function that's in prototype

## new keyword
- used to create an object

# iife - immediately invoked function expression
- used to create private variables
- variables created under iife is always private and cannot be accessed easily

```javascript
var ans = (function(){
    var privatevar=12;

    return {
        getter: function(){
            console.log(privatevar);
        }
        setter: function(val){
            privatevar = val;
        }
    }
})()

ans.getter(); // 12
ans.setter(24); // privatevar = 24
ans.getter(); // 24
```


# prototypal inheritance
## inheritance :
- the child class inherits the properties and methods from the parent class
## prototypal inheritance :
- its a feature in js used to inherit the prototype and methods from one object to another object
- by using " __ proto __ "
```javascript
var human = {
    canFly : false;
    canTalk : true;
    canWalk : true;
    haveEmotion : true;
    hasFourLegs : false;
}

var student = {
    canCreateWebsite : true;
    canMakeAnimationInWebsite : true;
}

student.__proto__ = human; // now the 'student' obj can have the prototype and methods of the 'human' obj
console.log(student.canFly); // false
```

# this keyword
- global->window, function->window, method->(parent)object 
## In global scope :
- "this" refers to the global object which is window
```javascript
console.log(this); // window
```

## In function scope :
- "this" refers to the global object which is window
```javascript
function abcd(){
    console.log(this); // window
}
abcd();
```

## In method scope : 
- "function" created under object is called "method"
- "this" keyword always refers to "parent object"
```javascript
var obj = {
    name: "suji",
    someMethod: function(){
        console.log(this);   // gives object 'obj'
    }
}
obj.someMethod(); // {name: "suji", someMethod:f}
```

## In event listeners :
- this always refers to variable before addEventListener
```javascript
var button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log(this); // <button>click me</button>
    this.style.color="red"; // the color of the button chnages to red
})
```

# call apply bind 
- (all these methods are used to refer 'this' to any object)
## call
- with call() we can call the function and as well as assign another object as the value of 'this' which is in the function
- normally 'this' refers to window in function scope, but using 'call()' we can make 'this' to refer another object
```javascript
function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3); // {name: "suji", age: 21} 1 2 3
}
var obj = {
    name: "suji",
    age: 21
}
abcd.call(obj, 1, 2, 3); // calls the 'abcd' func and as well as assign 'this' to object 'obj'
```

## apply
- it sends the arguments for the function as an array
```javascript
function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3); // {name: "suji", age: 21} 1 2 3
}
var obj = {
    name: "suji",
    age: 21
}
abcd.apply(obj, [1,2,3]); // calls the 'abcd' func and as well as assign 'this' to object 'obj'
```

## bind 
```javascript
function abcd(){
    console.log(this); // {name: "suji", age: 21}
}
var obj = {
    name: "suji",
    age: 21
}
var bindfunc = abcd.bind(obj);
bindfunc(); // when u run 'bindfunc()' in console it gives otuput as {name:"suji", age:21} as 'bind' has binded the function abcd which contained 'this' keyword with the object 'obj'

```


# loose equality operator == vs strict equality operator ===
- == checks if the values are same but doesn't checks if they are in same datatype
- === checks both the values and datatype of the value
```javascript
console.log(10 == '10'); // output : true
console.log(10 === '10'); // output : false
```


# React - JavaScript PreRequities

## Optional Chaining & nullish coalescing
### optional chaining
- It is used to ==check if there any values/properties are present or not in the object==

### nullish coalescing operator (??)
- It is used to ==set the default value== when the ==left-side of the operand is 'null / undefined' this operator return the right-side operand otherwise it returns the right-side operand==
- example :
	const age = obj?.age ?? 0

```javascript
const obj = {name:"suji", age:21, dep:"cse", cduration:4}
const age = obj?.age ?? 0
const cdur = obj?.cduration ?? 0
const graduation_age = age+cdur
console.log(graduation_age) // output : 25

const obj = {name:"suji", age:21, dep:"cse"}
const age = obj?.age ?? 0
const cdur = obj?.cduration ?? 0 // since cdruation is not present in obj, it bcms 0
const graduation_age = age+cdur
console.log(graduation_age) // output : 21
```

## array filter method
#filter
- .filter() ==returns a new array== for the given condition like filtering the given array and the result is returned to a new array
- It might look like 'map()' function but it should be ==always in the form of boolean type (true/false)==
- If the ==condition is true== then that ==particular filtered array is returned to as new arrays else it doesn't==

### syntax
```javascript
var_name = array.filter((arr) => condition which return true/false)
						 callback function	
```


```javascript
const dramaArr = [
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}
]

const history1 = dramaArr.filter((drama) => drama.genre === "Historical")
const history2 = dramaArr.filter((drama) => drama.episode>=40 &&  drama.genre.includes("Historical"))
const thriller = dramaArr.filter((drama) => drama.genre.includes("thriller"))

console.log(history1)
/* output : [{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}] */
console.log(history2)
/* output : [{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}] */
console.log(thriller)
/* output : [{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16}] */

```

## array reduce method
#reduce
- It is use to reduce the whole array into a single value for some calculations
- used to reduce an array into single value and which can be stored another variable

### syntax
```javascript
var_name = array.reduce((accumulator, value) => some calculation which gives a single value)
						 callback function	
```


```javascript
const dramaArr = [
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}
]

const historyDramaEpisode = dramaArr.filter((drama) => drama.genre.includes("Historical")).reduce((totalEpisode, drama) => totalEpisode + drama.episode, 0)

console.log(historyDramaEpisode) // output : 88

// simple example
const arr = [1,2,3,4,5]
const sum = arr.reduce((acc, val) => acc+val, 0)

console.log(sum) // output : 15
```

## working with immutable array

- we need to add, update, delete array without changing them originally

### for adding in an array
#seprator
- we use 'seprator operator'

```javascript
const dramaArr = [
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}
]

const newDrama = {id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
const dramaArrAfterAdd = [...dramaArr, newDrama]

console.log(dramaArrAfterAdd)
/* output :

// Adding
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

*/
```

### for deleting in an array
#filter
- we can use '.filter()' method 

```javascript
const dramaArr = [
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}
]

const newDrama = {id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
const dramaArrAfterAdd = [...dramaArr, newDrama]

const dramaArrAfterDelete = dramaArrAfterAdd.filter((drama) => drama.id !==3)

console.log(dramaArrAfterAdd)
console.log(dramaArrAfterDelete)

/* output :

// Adding
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

// Deleting
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

*/
```

### for updating in an array
#map
- we can use '.map()' method

```javascript
const dramaArr = [
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40}
];

const newDrama = {id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16};
const dramaArrAfterAdd = [...dramaArr, newDrama];

const dramaArrAfterDelete = dramaArrAfterAdd.filter((drama) => drama.id !==3);

const dramaArrAfterUpdate = dramaArrAfterDelete.map((drama) => 
drama.genre === "fantasy" ? {...drama, genre:"rom-com & fantasy"} : drama);

console.log(dramaArrAfterAdd)
console.log(dramaArrAfterDelete)
console.log(dramaArrAfterUpdate)

/* output :

// Adding
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:3, dramaName:"Happiness", genre:"thriller", episode:16},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

// Deleting
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:4, dramaName:"Mr.Queen", genre:"fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

// Updating
[
{id:1, dramaName:"Sweet Teeth", genre:"rom-com", episode:24},
{id:2, dramaName:"Squid Game", genre:"thriller", episode:10},
{id:4, dramaName:"Mr.Queen", genre:"rom-com & fantasy", episode:16},
{id:5, dramaName:"The Long Ballad", genre:"Historical", episode:48},
{id:6, dramaName:"Love like the Galaxy", genre:"Historical", episode:40},
{id:7, dramaName:"Destined with you", genre:"Fantasy", episode:16}
]

*/
```

# Array.from()
- Def : `Array.from` is a static method that creates a new, shallow-copied Array instance from an array-like or iterable object.
- syntax :
```javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFunc)
Array.from(arrayLike, mapFunc, thisArg)
```
- Example :
```javascript
// Creating an array from a string
const str = 'hello';
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']

// Using the mapping function
const newArr = Array.from([1, 2, 3], x => x * 2);
console.log(newArr); // Output: [2, 4, 6]

// another using mapping func
const numArr = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(numArr); // Output: [1, 2, 3, 4, 5]

```