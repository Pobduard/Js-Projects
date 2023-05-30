//& [Variables- 0:08:02]
/* 
// let, var es la vieja a no usar, o conts que es constante
let fistName = "Bro;"
let age = 21;
let student = true;
console.log("Hello", fistName);
console.log("Yoy may be", age, "Years Old");
console.log("Enrolled", student); */


//& [Show txt html]
/*
document.getElementById("p1").innerHTML = "Hello Bro P1";
    document.getElementById("p2").innerHTML = "Hello Bro P2";
    document.getElementById("p3").innerHTML = "Hello Broo P3"; 
*/


//& [Simple Prompt - 0:21:14]
/*
    let username = window.prompt("Whats Your Name?: ");
    console.log(username);
*/


//& [User Input - 0:24:14]
/*
    let unsername;
    document.getElementById("MyButton").onclick = function() {
        unsername = document.getElementById("MyText").value;
        console.log(unsername);
        document.getElementById("MyLabel").innerHTML = "Welcome " + unsername;
    }
*/


//& [Type Convertion]     // 27:38 mins
/*
    //+ El Window promot es siempre string al regresar, si lo combinamos con numeros nos actuaria tipo string
    let age = window.prompt("Enter Your Age: ");
    console.log("La VAriabler age es de tipo: " + typeof age);
    age = Number(age); // Sin esto, el age actuaria como string y joderia todo, pero con esto lo convertimos a int y listo, pa lante
    age += 1;
    console.log("Welcome, youre " + age + " y/o");
        //tambien sirve de tipo
    let Numero = Number("3.15");
    console.log("Tipo de la var Numero: " + typeof Numero);
        // Si Convertimos un string, que no deberia ser un numero, nos da entonces " NaN" Que nisifica "Not a Numeber"
        // Ej si fueamos a poner => Number("Pizza"), el type of nos da de resultado "NaN"
    // Ó
    let Cadena = String("3.1888");
    console.log("Tipo de la var Cadena: " + typeof Cadena);
    // Ó
    Let Booleano = Boolean("");
    console.log("Tipo de la var Booleano: " + typeof Booleano);
    // EL boleano en string, da falso si esta vacia, verdadero si posee algo
    // Con numeros el 0 y 1
*/


//& [Constants]      // min 30:17
/*
    // Se ua ser "Const" al inicializar la variable, 
    //en vez de var o let (let es mas seguro por cuestion de scope 
    //al parecer, pa funciones and all that shit)

    // Hacer la vaina de circunferencia
    const PI = 3.14159;
    // Es buenapractica para las constantes, ponerlas todo en mayusculas
    let radious, circunference;

    radious = Number(window.prompt("Enter the radious of your circle: "));
    // El prompt de una a numero, normalmete da en string, pero de una pa ahorrar, funciona.
    circunference = 2 * PI * radious;
    console.log("The circunference of the circle is: " + circunference);
*/


//& [Math]       // min 33:31
/*
    // Tiene que ser con el Math, m mayuscula o no agarra bien, Math como tal es un objeto
    let x = -3.14;
    let y = 5
    let z = 9
    let max, min;
    // x = Math.round(x); // lo del 5  pa arriba o abajo
    // x = Math.floor(x); // lo de pa abajo
    // x = Math.ceil(x); // pa arriba
    // x = Math.pow(x); // Exponente
    // x = Math.sqrt(x); // raiz cuadrada
    // x = Math.abs(x); // Absolute Valor => distancia de 0
    // x = Math.random(); // Numero radom entre 0 y 1

    // Tambien hay pa maximos y minimos de una coleccion

    max = Math.max(x, y, z);
    min = Math.min(x, y, z);

    // Y tambien posee sus constantes
    console.log(Math.PI);
    console.log(max, min);
*/


//& [Practica, Hipotenisa de un traingulo, pero con input del HTML]       // min 36:66
/* 
let a; 
let b;
let c;
    document.getElementById("submitButton").onclick = function() {
        a = document.getElementById("aTextBox");
                    //console.log(typeof a); //Lo devuelve como objeto
        a = Number(a); 
                    //console.log(typeof a);
        // Recordar que el coso aun nos lo regresa en string
        b = document.getElementById("bTextBox");
                    // console.log(typeof b);
        b = Number(b);
                    // console.log(typeof b);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
                    //console.log(typeof c);

        console.log("A: ",a);
        console.log("B: ",b);
        console.log("Before",c);
        document.getElementById("cLabel").innerHTML = ("SideC: " + c);
        console.log("After",c);
    }   // Theres a problem but npi */


//& [Simple Counter | HTML&CSS]           //min 43:20
/* 
let count = 0;

document.getElementById("DecreaseButton").onclick = function(){
    count-=1;
    document.getElementById("CountLabel").innerHTML = count;
    }
document.getElementById("ResetButton").onclick = function(){
    count = 0;
    document.getElementById("CountLabel").innerHTML = count;
    }
document.getElementById("IncreaseButton").onclick = function(){
    count+=1;
    document.getElementById("CountLabel").innerHTML = count;
    } */


//& [Random Number in Js]       // Min 47:00
/* 
// El Metodo random de JSON, genera un numero decimal entre 1 y 0, pero podemos "modificarlo" si ese numero lo multiplicamos por el numero que deseamos de posibilidades
//  luego recordar que el 0 cuenta en la package, entonces su luego le sumamos 1, obtenemos el numero entre 1 y [Numero por el que multiplicamos]
//  recordar que es un numero decimal, toces si lo queremos eliminar EventSource, usarmos floor o ciel (mejor floor)

let w;
 w = Math.random(); // Numero decimal entre 0 y 1
 w = Math.floor(Math.random()); // Numero entero entre 0 y 1
 w = Math.floor(Math.random() * 6); // Numero entero entre 0 y 5 (6 posibilidades) 
 w = Math.floor(Math.random() * 6) + 1; // Numero entero entre 1 y 6 (6 posibilidades) 

// ahora por hacer, mostremoslo en HTML

//let x, y, z;
// Usualmente usariamos declararamos valores, ya que usualmete se usan pa algo luego, pero en este caso no es necessario ya que solo lo mostramos

// colocar el " ()=> " reemplaza el colocar el " function name(params) {} 
document.getElementById("RollButton").onclick = ()=> {
    document.getElementById("xNumLabel").innerHTML = Math.floor(Math.random() * 6) + 1;
    document.getElementById("yNumLabel").innerHTML = Math.floor(Math.random() * 6) + 1;
    document.getElementById("zNumLabel").innerHTML = Math.floor(Math.random() * 6) + 1;
} 
 */


//& [Useful String propeties & Methods | HTML] // Min 52:32
/*
let username = "  Bro Code  ";
let PhoneNumb = "123-456-789";

console.log(username.length); //Longitud del String
console.log(username.charAt(3)); //Mostrar el charen la posicion especifica
console.log(username.indexOf("o")); //que muestre el index de la 1ra aparcion del char dado
console.log(username.lastIndexOf("o")); //Lo mismo que la anterior, peor no la 1ra, si no la ultima aparicion

console.log(username.trim()); //Quita espacios vacios antes y despues de los caracteres
// Todo en Menores y Mayores
console.log(username.toLowerCase);
console.log(username.toUpperCase);

PhoneNumb = PhoneNumb.replaceAll("-", "/"); // El Replace all, reemplaza todos los caracteresque pongamos 1ro, con los que pongamos 2do
console.log(PhoneNumb);
PhoneNumb = PhoneNumb.replaceAll("/", ""); // Pa Eliminar seria asi, con vacio
console.log(PhoneNumb);
*/


//& [Slice Method]   //Min 55:18
/* 
// Extrae una seccion de un string dado, la return como un nuevo string, y no modifica el original
let FullName = "Bro Code";
let FirstName, LastName;

FirstName = FullName.slice(0, 3);
LastName = FullName.slice(4);   //Tiene 2 parametros, el 1ro es donde inicia el slice, y el 2do donde finaliza, si no se da el 2do entonces sigue hasta el final del string
console.log(FirstName);
console.log(LastName);
// Pero, funciona con el "IndexOf"/"LastIndexOf"? vamos a ver

LastName = FullName.slice(FullName.indexOf(" ") + 1); // se pone el +1, ya que el index regresado se suponees el espacio, y es lo que vamos a tratar de ignorar aqui, osease obtener el nombre despues de donde sea que esta el espacio
FirstName = FullName.slice(0, FullName.lastIndexOf(" ")); // Mismo de arriba pero conel LastIndexOf
console.log(FirstName);
FirstName = FullName.slice(0, FullName.indexOf(" ")); // Tambien sirve poner el espacio directamente con el IndexOf EN ESTE CASO, osease obtener el nombre antes de donde sea que esta el espacio de ultimo
console.log(FirstName);
 */


//& [Method Chaining]    // Min 59:25
/* 
// Auto explicativo, llamar un metodo despues de otro, dentro de la misma linea de codigo

let username = " bro "; //Queremos agarrar el 1er char, y hacerlo mayuscula

username[username.indexOf("b")] = username.charAt(username.indexOf("b")).toUpperCase().trim();
console.log(username);
// Como es un string, y queremos cambiar una letra especifica, encontramos donde esta con el IndexOf, y modificamos ese solamente porque nohay necesidad de otros
// igualamos pa que se modifique, y nuevamente damos la posicion especifica, la mandamos a mayuscula, y le hacemos trim a todo pa que quede bonito
 */


//& [If Statement in Js]       // Min 1:01:30
/* 
let age = window.parseInt(window.prompt("Enter Ypur Age: "));
if (age >= 18){
    console.log("You Are an Adult");
}
else if (age >= 16 && age <= 17){
    console.log("You May be Legal on Mexico/Tijuana");
} else if (age < 0){
    console.log("Damn a demon child with a -age, curious, Get The Fuck Out Demon. This a Christian HouseHold.");
} else if(age > 30){
    console.log("Wow and Old Demon, Nice Get In as long as you're a sexy milf");
} else{
    console.log("Child Here Buuu-Huu");}
// Recordar ahi que la jerarquia importa, en el sentido de que si se cumple 1, se sale del ciclo if, por ello el de 65yo no se muestra

// Ahora con Booleanos, simplemente lo podemos poner y listo, si es verdadero se ejecuta, si no new Promise((resolve, reject) => {
// osea el if lo toma tipo " Si [Condicion] = true {Ejecuta} ", por eso funciona

let online = true;
if (online){console.log("Youre online");
} else {console.log("Youre Offline");}
 */


//& [Check propety of check boxes and radio buttons | HTML]       // Min 1:05:26 // Basicamente booleano si lacajita esta chekeada o no
/* 
document.getElementById("myButton").onclick = function(){
    //+ Podemos meter mejor el "Elemento" en una variable, asi en vez de llamarla a cada rato, podemos solo usarla a traves de la variable  
    const myCheckBox = document.getElementById("myCheckbox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked == true) {
        console.log("You are Subbed");
    } else {
        console.log("You are Not Subbed");}

    if(visaBtn.checked){console.log("You are Paying with a Visa");}
    else if(masterCardBtn.checked){console.log("You are Paying with a Master Card");}
    else if(paypalBtn.checked){console.log("You are Paying with a Paypal Card");}
    else{console.log("You Must Select a Payment");}
} */


//& [Swithes | HTML    -   01:12:39]
/* 
let grade = 95;
    //+ Podemos mirra mas que solo las cosas del switch, si no ver una condicion, y luego lo verdadero adentro tipo if
switch (true) {
    case grade >= 90:
        console.log("Grade A, greate!");
        break;
    case grade >= 80:
        console.log("Grade B, BUENO!");
        break;
    case grade >= 70:
        console.log("Grade C, caray");
        break;
    case grade >= 60:
        console.log("Grade D, Passed barely thx to the D");
        break;
    case grade >= 50:
        console.log("Grade F, Failure!");
        break;
        default:
        console.log("It not a grade!");
        break;
} */


// &[AND && OR || operators |          -   01:16:26]
/*  */


// &[NOT ! operator  |          -   01:20:29]
/*  */


// &[While Loop  |          -   01:23:26]
/*     
    // Existe el variable = 
    // window.promot("Enter Your Name");
    // para obtener input 
*/


    // &[Do While Loop  |          -   01:26:14]
/*  
//Basicamente para cuando algo puede estar falso de antemano
//osea que la condicion del while normal ya este como falsa 
*/


    // &[For Loop  |          -   01:28:36]
/*
for(let counter = 10; counter > 0; counter-=3){
        console.log(counter);
    } console.log("Happy New Year!");*/


    // &[Break & Continue  |          -   01:32:05]
/* 
for (let i = 0; i <= 20; i++) {
    if(i == 13){continue;}      //+ Se Salta 1 iteracion
    if(i == 19){break;}         //+ Sale por Completo del Loop
    console.log(i);
} */


// &[Nested Loop  |          -   01:33:34]
/* 
let symbol = window.prompt("Enter a Symbol to use");
let rows = window.prompt("Enter a # of rows");
let columns= window.prompt("Enter a # of Columns");
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
} */


// &[Functions  |          -   01:38:05]
/* 
// Define codigo 1 vez, usalo muchas veces
startProgram();
function startProgram(){
    let name = prompt("Enter a name");
    let age = Math.round(parseFloat(prompt("Enter a age")));
    happyBirthday(name, age);
}


function happyBirthday(name, age){
    if(arguments.length > 2){throw new Error("Too many args");}
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear ${name}!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy you are ${age} years old now WhooHOOO!`);
} */


// &[Ternary ? operator |          -   01:45:36]
/* 
// El que nos deja hacer "If / else" dentro de la misma linea, mas corto y rapido par condiciones sencillas
// condicion ? si es verdadero : si es falso
let adult = checkAge(21);
console.log(adult);
function checkAge(age) {
    return (age >= 18) ? true : false;    
}

checkWinner(true);

function checkWinner(win){
    win ? console.log("You Win") : console.log("You lose");
} */


// &[template literals | HTML         -   01:53:25] "alt+96"
/* 
// delimitadas con " ` ", permite tener "embedded" variables y expresiones, se pone el string tipo
// (` Hello ${variable} `);
//como el % en el c++, pero con todo tipo de varibales en un console.log pues
// e igual que el uso de un string formatteado de python

let userName = "Bro";
let items = 3;
let total = 75;
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);
// +Muy util para csas como esta:
let text = `
    Hello ${userName}
    You have ${items} items in your cart
    Your total is $${total}`;
console.log(text);  //+ se imprimio con todo y los tabs de una, util tambien para los html
document.getElementById("myLabel").innerHTML = text; */


// &[format currency |          -   01:57:47]
/* 
//toLocaleString()  =   returna un string con una representacion "Sensible de lenguaje" de este numero
// Basicamente pa Dinero   , es tipo:
//  number.toLocaleString(locale, {options});
//          locale = un lenguaje especficado, si no se pasa ninguno usara el default de la pc
//          options = objeto con especificaciones de formato, basicamente decir que es el formato, dinero, una medida, % etc
// parece que solo se puede formatear 1 vez no obstante, quizas por el tipo de formato que retorna, entonces cuidado al igualar variables
// Quizas sea mejor manenerlas como tal, como variables y modificarlo donde sea necesario, peor no cambiar la variable/igualarla

let myNum = .5;
let myNum1 = 123456.789;
let myNum2 = 100;
console.log(myNum1.toLocaleString("en-US"));    //Ingles de estados unidos
console.log(myNum1.toLocaleString("hi-IN"));    //Hindi
console.log(myNum1.toLocaleString("de-DE"));    //German
console.log(myNum1.toLocaleString("es-VE", {style: "currency", currency: "USD"}));
console.log(myNum1.toLocaleString("hi-IN", {style: "currency", currency: "INR"}));
console.log(myNum1.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
console.log(myNum.toLocaleString(undefined, {style:"percent"}));    //+ Muestra el porcentaje de lo que sea que se metio, lo que daria la multiplicacion por eso pues de un numero "Total"
console.log(myNum2.toLocaleString(undefined, {style:"unit", unit: "celsius"}));    //+ Muestra el tipo de unidad metido (celsios, km, m, miles etc ...)
 */


// &[number guessing game | HTML         -   02:02:47]
/* 
const answer = Math.floor(Math.random() * 10 + 1);  //El random da entre 0 y 9 en eset caso, el +1 es pa que sea entre 1 y 10
let guesses = 0;
document.getElementById("submitButton").onclick = ()=>{
    let guess = document.getElementById("guessField").value;
    guesses++;
    if(guess == answer){
        alert(`${answer} is the correct #. It took you ${guesses} guesses`);
    } else if(guess < answer){
        alert("Too Smoll");}
    else {
        alert("Too large!");}
} */


// &[temperature conversion program | HTML         -   02:06:55]
/* 
document.getElementById("submitButton").onclick = ()=>{
    let temp;
    let label = document.getElementById("tempLabel");
    temp = document.getElementById("textBox").value;    //still a String value
    temp = Number(temp);

    if(document.getElementById("cButton").checked){
        temp = toCelsius(temp);
        label.innerHTML = temp + "°C";
    } else if(document.getElementById("fButton").checked){
        temp = toFahrenheit(temp);
        label.innerHTML = temp + "°F";
    } else {
        label.innerHTML = "Select a Unit";
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return (temp * 9/5 + 32);
}
 */


// &[arrays  |          -   02:15:49]
/* 
// variable que puede guardar multiples valores, no 1 solo

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[3]);      //+ Si el elemento no existe, saldra como "undefined"
fruits[0] = "coconut";
console.log(fruits[0]);
fruits.push("lemon");        //+ Añadimos un elemento, por lo tanto su tamaño aumenta
console.log(fruits[fruits.length - 1]);     //+ Tamaño total -1 porque el array empieza en 0
fruits.pop();               //+ Remueve el elemento final
console.log(fruits[fruits.length - 1]);     //+ Tamaño total -1 porque el array empieza en 0
fruits.unshift("mango");    //+ Añade elemento al inicio del array
console.log(fruits[0]);
fruits.shift();             //+ Remueve el 1er elemento
console.log(fruits[0]);

let length = fruits.length;  //+ Ver el tamaño total del array
console.log("Tamaño:", length);
let index = fruits.indexOf("orange");    //+ encontrar elemento dentro del array
console.log("Posicion de orange:", index);   //+ Si el elemento no se encuentra, retorna el numero "-1"
console.log("Posicion de apple:", fruits.indexOf("apple"));   //+ Si el elemento no se encuentra, retorna el numero "-1"
 */


// &[Arrays |          -   02:15:49]
/* 
//+ Podemos hacerlo a traves de un fori/for loop, o un "for of"
let prices = [5, 10, 15, 20];
prices.push(25);
//+ Ir pa alante
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}
//+ Ir pa atras
for (let i = prices.length-1 ; i >= 0; i--) {   //+ i = tamaño total "Real"
    console.log(prices[i]);
}

for (let price of prices) {     //+ Se escribe como el forEach de C++/Java
    console.log(price);
} */


// &[sort an array of strings |          -   02:23:16]
/* 
let fruits = ["Bannana", "Apple", "Orange", "Mango"];
fruits = fruits.sort();     //+ Lo regresara de forma alfabetica, pero dentro del propio sort CREO podemos modificar la forma de como se va a realizar dicho sort
fruits = fruits.sort().reverse(); //+ El Reverse solo muta el array, volteando sus posiciones (Retorna el Array en Reverso)
for (let fruit of fruits) {
    console.log(fruit);
}
 */


// &[2D arrays |          -   02:24:50]
/* 
//+ Array de Arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats]
groceryList[2][0] = "steak";    //Cambiar valor del "egg"

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}
 */


// &[spread operator |          -   02:29:14]
/* 
//+ spread operator = Permite que un itearble, como un array o string
//+                      sea expandido en lugares donde 0 o mas argumentos son esperados
//+                      Los "desempaca" a muchas piecas individuales.

let userName = "Bro Code";
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(...userName);
console.log(...numbers);
//+ Ejemplo de su uso, encontrar el valor mayor de un array, usando el metodo del la libreria Math
console.log("Before unshift",Math.max(...numbers))  //+ le Pasamos TODOS los valores a la vez y lo encuentra de forma mas sencilla
numbers.unshift(10);
console.log("After unshift",Math.max(...numbers))

//+ Ahora como si fueramos un profesor y tuvieramos 2 clases de esudiantes 
//+ Queremos añadir los estudiantes de una clase a la otra:

let class1 = ["SpongeBob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
console.log(class1);
class1.push(class2);       //+ como Js no le importa los tipos, hacemos que el elemento 4 sea TODO el array
console.log(class1[class1.length-1]);
//+ para juntarlos bien tocaria hacer tipo 
class1.splice(3,1); //+ Quitar el "error"
class1.push(...class2); //+ Añadirlo a lo bien
console.log(class1);
 */


// &[rest parameters |          -   02:33:32]
/* 
//+ rest params = Representa un numero indefinido de parametros
//+               (Empaca argumentos dentro de un array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 50;

console.log(sum(a,b,c,d,e));    //Muestra 57, porque el a, b no se sumo dentro del array al ser las 2 1ras posiciones

function sum(x, y, ...numbers){
    //+ Suma todos los numeros que se le pasen, el " ... " los empaca en un mismo array
    //+ el cual de nombre lleva lo que pongamos despues de los " ... " tipo: " ...[nombre] "
    //+ Si se combina con parametros normales, estos agarran los valores de sus posiciones respectivas
    //+ a partir del ... agarra todo pal array

    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}
 */


// &[callbacks  | HTML         -   02:37:09]
/* 
//+ callback = una funcion pasada como argumento a otra funcion
//+             Usado para asegurar que una tarea se complete antes de correr una funcion (la porpia tarea la puede llamar en su final)
//+             Ayuda con el codigo Asyncrono (cuando una funcion tiene que esperar a que otra termine) para ayudar a evitar problemas
//+ A           y errores. Ejemplo "Espera q eu x Archivo se carge"

//+ De esta forma llamamos la funcion, solo tenemos que pasar el nombre de la respectiva sin los " () " porque de esa forma es que se invoca
sum(2,3, displayDOM);
sum(2,3, displayConsole);

//+ Esperamos el "callback" llamado "myFucn", y lo usamos con su cant de param correspondiente
function sum(x, y, myFunc){
    let result = x + y;
    myFunc(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
 */


// &[array.forEach() |          -   02:41:58]
/* 
//+ array.forEach() = Ejecuta una funcion "callback" dada, 1 vez por cada posicion del array

let students = ["spongeBob", "patrick", "squidward"];
students.forEach(capitalize)
students.forEach(print)

function capitalize(element, index, array){ //+ Parametros del forEach()
    array[index] = element[0].toUpperCase() + element.substring(1);   //+ element[0] para ir a la 1ra posicion del string | element.substring(1) para hacer un corte a partir del 1er elemento, asi "devolviendo" la palabra entera
}

function print(element){console.log(element);};

console.log(students);
 */


// &[array.map() |          -   02:45:19]
/* 
//+ array.map() = Ejecuta un callback dado una vez por cada elemento del array
//+                 Y crea un nuevo array en el proceso

let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);
squares.forEach(print);
console.log("[----]");
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);}
function cube(element){
    return Math.pow(element, 3);}
function print(element){console.log(element);}
 */


// &[array.filter() |          -   02:48:10]
/*
//+ array.filter() = creates a new array with all the elements that pass the test
//+                  provided by a function passed

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);
//+ Basicamente crea un array totalmente nuevo, con los elementls del original que cumplan la condicion
//+ condicion que nosotros definimos en la funcion que le pasamos

adults.forEach(print);

function print(element){
	console.log(element);
}

function checkAge(element){
	return element >= 18;
}
*/


// &[array.reduce() |          -   02:50:21]
/*
//+ array.reduce() = Reduce el array a 1 solo valor
//+ Basicamente junta todos los valores del array en 1 solo, en caso de numeros, los suma todos esos valores numericos de 1

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log("The total is", total, "$");

function checkOut(total, element){
				return total - element;
}
*/


// &[sort an array of numbers |          -   02:52:33]
/*
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades.forEach(print); //+ Cuidado con el forEach aqui, porque en los logs, toma cada "instancia" del uso de la funcion como la misma linea, usar console.log() dentro de la propia funcion para debug

console.log("===[Divider]===");
grades = grades.sort(ascendingSort);
grades.forEach(print);


function print(element){
				console.log(element);
}
function descendingSort(x, y){
				return y-x;
}
function ascendingSort(x, y){
				return x-y;
}
*/


// &[function expressions | HTML         -   02:54:41]
/*
//+ function expression = Una funcion sin un nombre ("Anonima"), evita "acaparar" el scope global con nombres.
//+        "Escribir y Olvidarla"  

const greeting = function() //+ Se puede hacer, pero es innecesario, lo dejo para demostrar lo de que la funcion la igualamos a un nombre, y la llamamos por dicho nombre
{console.log("Hello!");}
greeting();

let count = 0;

document.getElementById("increaseButton").onclick = function(){
				count++;
				document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
				count--;
				document.getElementById("myLabel").innerHTML = count;
}
*/


// &[arrow function expressions |          -   02:59:55]
/* 
//+ arrow function = compact alternative to a traditional function expression
//+					=>

//+ Basicamente en vez de poner " function(param){} " ponemos " (param)=>{}"
    const greeting = (userName)=>console.log("Hello", userName, "!");
//+ puede usarse con o sin { } si la funcion tiene 1 sola declaracion, igual con los params, si es solo 1 se puede usar sin los ()
greeting("Bro");

const percent = (x,y)=> x/y*100;    //+ Si es sin los {} no se debe poner el return o da error
console.log(`${percent(45, 50)}%`);

//+ mismo codigo del ejemplo del sort array of numbers, pero con arrow espression al ser funciones de 1 sola declaracion
let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => {return y-x;});
grades.forEach((element) => console.log(element));
 */


// &[shuffle an array |          -   03:05:42]
/* 
//+ Basicamente usar el random y cambiar posiciones de un array
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
shuffle(cards);
console.log(cards);
cards.forEach((card) => console.log(card));

function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex != 0){   //Empieza por el final
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex-=1;
        
        let temporary = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporary;
        //Por cada posicion, se busca un umero random menor, por el que cambiar posicion, y seguir 
        // el mismo proceso en donde se iba
    }
    return array;
} */


// &[nested functions |          -   03:09:30]
/* 
//+ nested functions = Funcion dentro de otra funcion.
//+                     Las funciones de "afuera" tienen acceso a las de adentro
//+                     Las de adentro estan "escondidas" desde afuera
//+                     usado en encapsulamiento

let userName = "Bro";
let userInbox = 10;
login();

//+ Ocultamos las funciones de "adentro" definiendolas directamente dentro de la otra funcion
//+ Truqueando el scope de esa forma
function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
 */


// &[maps |          -   03:12:47]
/* 
//+ Map = Objeto que guarda valores en forma de "llave-valor" (como "pares", osea juntos) de cualquier tipo de data

const store = new Map([
    //+ [Llave, Valor] , [Llave, Valor] , ...
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

//+ Digamos que deseamos acceder a 1 de esos valores
let shoppingCart = 0;
shoppingCart += store.get("t-shirt");   //+ Accedemos a traves de la llave, como si la llave fuera el "index" en un array
shoppingCart += store.get("underwear");
console.log("ShoppingCart = ",shoppingCart);

store.set("hat", 40);   //+ Para añadir valores, llave y valor
store.delete("socks");  //+ Para eliminar, pasamos la llave

console.log(`Does the Store has Hats?: ${store.has("hat")}`);   //+ Tiene una llave?
console.log(`Does the Store has Socks?: ${store.has("socks")}`);

console.log(store.size);    //+ Mirar la cant de pares

//+ Para mostrar los valores
store.forEach((value, key) => {console.log(`${key} = $${value}`);});
 */

// &[objects  |          -   03:17:07]
/* 
//+ object = Un grupo de propiedades y metodos
//+         Propiedades = lo que un objeto tiene
//+         Metodos = lo que un objeto puede hacer
//+             Se usa " . " para acceder a las propiedades y metodos

const car1 = {
    //& Propiedades
    //+ Basicamente variable : valor, parecido a map, pero aqui el valor se lo estamos asignando de una, lo cual usualmente no pasa, si no se usan los constructores de las clases
    //+ Variables separadas por commas
    model: "Mustang",
    color: "red",
    year: 2023,

    //& Metodos 
    //+ Basicamente variables que son funciones, como en Js las podemos igualar de esa forma, tons funciona
    //+ Como son variables, o casi, pues se separan tambien por commas
    drive : function(){     //! el " this " se ve en la sig leccion
        console.log(`You Drive the car: ${this.model}, year: ${this.year}`);
    },
    break : function(){
        console.log(`You Step on the break of the car: ${this.model}, year: ${this.year}`);
    }
}
//+ Ya Creamos el Objeto, OBJETO directamente no CLASE
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.break();


//+ no es clase aun, tons pa crear otro objeto es a pata
const car2 = {
    //& Propiedades
    //+ Basicamente variable : valor, parecido a map, pero aqui el valor se lo estamos asignando de una, lo cual usualmente no pasa, si no se usan los constructores de las clases
    //+ Variables separadas por commas
    model: "Corvette",
    color: "Blue",
    year: 2024,

    //& Metodos 
    //+ Basicamente variables que son funciones, como en Js las podemos igualar de esa forma, tons funciona
    //+ Como son variables, o casi, pues se separan tambien por commas
    drive : function(){     //! el " this " se ve en la sig leccion
        console.log(`You Drive the car: ${this.model}, year: ${this.year}`);
    },
    break : function(){
        console.log(`You Step on the break of the car: ${this.model}, year: ${this.year}`);
    }
}
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.break();
 */


// &[this keyword |          -   03:21:09]
/* 
//+ this = Referencia para a un objeto particular (misma instancia de dicho objeto)
//+         Depende del contexto inmediato a su alrededor

const car1 = {
    //& Propiedades
    model: "Mustang",
    color: "Red",
    year: 2023,

    //& Metodos 
    drive : function(){
        //+ Tenemos que usar el " this. " para asi poder acceder a los datos/variables de ESTE objeto en especifico
        //+ Si no, no lo podemos acceder
        //+ Funciona igual si podemos el nombre del propio objeto (pero esto mayormente se desconce, al usar objetos como "anonimos" a traves de arrays 
        //+ (accediendo a cual es cual a traves de posiciones en el array))
        console.log(`You Drive the car: ${this.model}, year: ${car1.year}`);
    }
}
const car2 = {
    //& Propiedades
    model: "Corvette",
    color: "Blue",
    year: 2024,

    //& Metodos 
    drive : function(){
        console.log(`You Drive the car: ${this.model}, year: ${this.year}`);
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();

console.log(this);
//+ Contexto INMEDIATO, como realmente en el HTML nos encontramos en una "window", nos retorna esta misma
//+ lo cual si lo analizamos, nos permite cambiar propiedades de la propia window
this.name = "MyCoolWindow";
console.log(this , "this.name =", this.name);
 */


// &[classes  |          -   03:24:08]
/* 
//+ class = Un "Plano" para crear objetos
//+         Define que propiedades y metodos tenen los Objetos creados a partir de la clase
//+         usa un "constructor" para propiedades unicas

//+ se crean usando "class [Nombre de la Clase, usualmente 1ra letra Mayuscula]"
class Player{
    //& Propiedades
    //+ Son variables aunque no les pongamos el "let"
    //+ Cuidado con Js, puesto que si con el " this. " intentamos acceder a una propiedad que "no existe" solo nos devolvera "undefined"
    score = 0;

    //& Metodos
    //+ No es necesario usar el "function" para los Metodos de una clase
    pause(){
        console.log("You Paused the Game");
    }   //+ No es necesario separar con commas, ya que esta delimitado ya por los {}
    exit(){console.log("You Exited the Game");}
}

//+ Tenemos el Plano creado, pero eso, solo el plano, tenemos que crear el objeto a partir del plano ahora, o mejor dicho "Instanciar" la clase
//+ se crea usando el "new [Class_name]()"
const player1 = new Player();
//+ Ventaja del uso de clases, es que nos permite crear objetos muy similares de forma muy rapida y sencilla, asi como reusar la clase las veces que deseemos
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

//+ al ya haberlo creado, podemos modificar sus propiedades/atributos y acceder a estos, es un objeto ya despues de todo
player1.score += 500;
console.log(player1.score);
console.log(player2.score);
player1.pause();
player2.exit();
 */


// &[constructors |          -   03:27:15]
/*
//+ constructor = Un metodo especial de una clase
//+																																	acepta argumentos y aisgna propiedades

class Student{
				//+ Se escribe de esa forma
				constructor(name, age, gpa){
								this.name = name;
								this.age = age;
								this.gpa = gpa;
				}
				
				study(){
								console.log(`${this.name} is studying`)
				}
}

const std1 = new Student("SpongeBob", 30, 3.2);
const std2 = new Student("Patrick", 35, 1.5);
const std3 = new Student("Sandy", 27, 4.0);

console.log(std1.name, "\n", std1.age, "\n", std1.gpa);
std1.study();

console.log(std2.name, "\n", std2.age, "\n", std2.gpa);
std2.study();

console.log(std3.name, "\n", std3.age, "\n", std3.gpa);
std3.study();
*/


// &[static keyword |          -   03:30:48]
/*
//+static = Pertenece a la clase, no al objeto (Usar clase, no es necesario instanciarla)
//+          Propiedades: util para cache, configuracion predefinida
//+          Metodos: util para funciones de utilidad (relacionadas con la propia clase)

class Car{
				//+ Como ejemplo haremos una propiedad, en la cual llevaremos el conteo de cuantos carros se han instanciado de la clase, a traves de irle sumando 1 cada vez que se instancie un objeto (a traves del constructor)
				//+ Para hacerlo un atributo de la clase
				static numberOfCars = 0;
				
				constructor(model){
								this.model = model;
								//+ Para modificar el dato Statico, se usa es [NombreClase].[Atributo]
								Car.numberOfCars++;
				}
				
				//+Para funciones
				static startRace(){
								console.log("3...2...1...GO!");
				}
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

// el car3 es indefinido, porque nuevamente, no accedemos a ninguna propiedad de objeto, accedemos es a una propiedad DE LA CLASE
console.log(`Car1:${Car.numberOfCars} \nCar2:${Car.numberOfCars} \nCar3:${car3.numberOfCars}`);
//Car1 y Car2 son iguales porque nuevamente, no es un numero de cada objeto, es de la clase que compone a ambos objetos

car4 = new Car("Ferrari");
car5 = new Car("McLaren");

console.log("# Of Total Cars Created: "+ Car.numberOfCars);

//+ Llamar metodo estatico
Car.startRace();
*/


// &[inheritance  |          -   03:34:22]
/*
//+ inheritance = Un hijo de clase puede heredar todos los
//+               Metodos y Propiedades de otra clase

class Animal{
				name = "";
				alive = true;
				
				eat(){console.log(`This ${this.name} is Eating`);
				}
				sleep(){console.log(`This ${this.name} is Sleeping`);
				}
}

class Rabbit extends Animal{
				//+ Testing, it can be renamed/replaces/overwritten if we use it again in the child class
				name = "rabbit";
				
				run(){console.log(`This ${this.name} is Running`);}
}

class Fish extends Animal{
				
				name = "fish";
				
				swim(){console.log(`This ${this.name} is Swimming`);}
}

class Hawk extends Animal{
				
				name = "hawk";
				
				fly(){console.log(`This ${this.name} is Flying`);}
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
fish.eat();
hawk.sleep();

rabbit.run();
fish.swim();
hawk.fly();
*/


// &[super keyword |          -   03:40:23]
/*
//+ super = Se refiere a la clase padre
//+         Comunmente usado para "invocar" al constructor de la clase padre

class Animal{
				//+ Si ponemos este constructor como tal, codigo, en cada una de laa clases hijas, nos da error
				//+ Creo el error es que una clase hija NEVECESITA llamar si o si al super en sh constructor, tiene sentido al ser hija despues de todo
				constructor(name, age){
								this.name = name;
								this.age = age;
				}
}

class Rabbit extends Animal{
				constructor(name, age, runSpeed){
								super(name, age);
								this.runSpeed = runSpeed;
				}
}

class Fish extends Animal{
				constructor(name, age, swimSpeed){
								super(name, age);
								this.swimSpeed = swimSpeed;
				}
}

class Hawk extends Animal{
				constructor(name, age, flySpeed){
								super(name, age);
								this.flySpeed = flySpeed;
				}
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(`Rabbit: ${rabbit.name} | ${rabbit.age} | ${rabbit.runSpeed} |
Fish: ${fish.name} | ${fish.age} | ${fish.swimSpeed} |
Hawk: ${hawk.name} | ${hawk.age} | ${hawk.flySpeed}|`)
*/


// &[getters & setters |          -   03:44:59]
/*
//+ get = Ancla la propiedad de un objeto a una funcion
//+       cuando esa propiedad ea accedida

//+ set = ancla la propiedad de un objeto a una funcion
//+       	cuando a esa propiedad se le asigna un valor

class Car{
				constructor(power){//Horse Power
								//+ el " ._ " indica que esa es una propiedad/atributo "protegido"
								this._power = power;
								this._gas = 5;
				}
				
				//+ el get no puede tener el mismo nombre de la propiedad/atributo
				//+ Como es a travea se getter ahora, esta propiedad no se puede modificar de normal, pa eso habrianque acceder a ella con el ._ tambien
				get power(){
								//return this.power;
								//+ Si se retorna asi, estariamos llamando al getter como tal, toca retornar es con el " ._ var " denuevo
								
								
								return `${this._power}HorsePower`;
								//+ Accedemos a la propiedas protegida ahora si, y aparte le podemoa meter logica extra
				}
				
				get gas(){
								//+ Digamos que el tanque tiene un espacio maximo de 50L
								//+ Tons retornar cuantos litros y que porcentaje representa
								return `${this._gas}L (${this._gas/50 * 100}%)`;
				}
				//+ Tiene setter, osease es modificable ahora si
				set gas(value){
								if(value >= 50){value = 50;}
								else if(value < 0){value = 0;}
								this._gas = value;
				}
}

let car = new Car(400);

car.gas = -1000000; //+ Para llanar la funcion del setter

let demos = car.power; //+ Solo llamar al getter, no puede cambiar el valor por eso mismo, llama al getter, no accede a la propiedad en si

car._power = 777; //+ Cambia, al usarse el ._ como ahora se debe gracias al getter

car.power = 9999; //+ No cambia al no ser ._   ,  solo llama al getter sin mas



//+ Pasa a llamar al getter de la propiedad
console.log("Power", car.power);
console.log("Demos", demos);
console.log("Gas", car.gas); //+Retorna es el Getter, da igual si se llama con el uso de "()" o no
*/


// &[objects as arguments |          -   03:51:17]
/* 
//+ A la final las var en Js no se sabe que son, por lo que funcina (casi) igual que con varriables
//+ Primitivas, solo que mas limitado
class Car{
    constructor(model, year, color){
        this._model = model;
        this._year = year;
        this._color = color;
    }

    set model(setter){this._model = setter;}
    set year(setter){this._year = setter;}
    set color(setter){this._color = setter;}

    get model(){return this._model;}
    get year(){return this._year;}
    get color(){return this._color;}
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2025, "yellow");

displayInfo(car3);
changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car){
    console.log(`var: ${car.constructor.name}\n${car.model} | ${car.year} | ${car.color}`);
}

function changeColor(car, color){
    car.color = color;
}
 */


// &[array of objects |          -   03:53:44]
/* 
//+ Usp simple de arrays de tipos, en este caso de tipo Objeto/User Defined pues
class Car{
    constructor(model, year, color){
        this._model = model;
        this._year = year;
        this._color = color;
    }

    set model(setter){this._model = setter;}
    set year(setter){this._year = setter;}
    set color(setter){this._color = setter;}

    get model(){return this._model;}
    get year(){return this._year;}
    get color(){return this._color;}

    drive(){console.log(`You drive ${this._model}`);}
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2025, "yellow");

const cars = [car1, car2, car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();
cars[1].drive();
cars[2].drive();

console.log("=======[Ferrari Created & Added]=======");
const car4 = new Car("Ferrari", 2025, "white");
cars.push(car4);

startRace(cars);

function startRace (cars) {
    for (const car of cars) {
        car.drive();
    }
}
 */


// &[anonymous objects |          -   03:56:52]
/* 
//+ anonymus object = Objetos que no tienen nombre
//+                    Osease que no tienen una referencia directa la cual usar para llamarlos
//+                    Menos syntaxis. Sin necesidad por nombres unicos

class Card{
    constructor (value, suit) { 
        this.value = value;
        this.suit = suit;
    }
}
let cards = [   new Card("A", "Hearts"),
                new Card("A", "Spades"),
                new Card("A", "Diamonds"),
                new Card("A", "Clubs"),
                new Card("2", "Hearts"),
                new Card("2", "Spades"),
                new Card("2", "Diamonds"),
                new Card("2", "Clubs")];

cards.forEach(card=>console.log(`${card.value} | ${card.suit}`));
 */


// &[error handling |          -   04:02:44]
/* 
//+ error = Objetos con una descripción de que algo salio mal
//+         Estos son usados para capturar y tratar errores.
//+         Se usan los "Try-Catch-Finally" Ej:
//+             "Cant Open a File"
//+             "Lose Connection"
//+             "User Types incorrect Input"
//+             "Type Error"

//+ throw = ejecuta un error que es "User Defined"

//+ try: "Intento"/ejecucion de un codigo el cual Creemos que nos podria dar error
try{
    let x = window.prompt("Enter a Number");
    x = Number(x);

    //+ Mirando si no es un Numero, osea lo que se escribio no se pudo transformar a un numero
    if(isNaN(x)){throw "ERROR: That Wanst a Number, no very Pog :(";}
    if(x == ""){throw "That was an Empty String";}

    console.log(`${x} is a number`);
}
//+ catch: lo que se hace al encontrar un error (Puede o no ser especifico)
catch(error){console.log(error);}
//+ finally: Se Ejecuta siempre al final del try-catch-block, independientemente si hubo o no error
finally{
    console.log("This Always Executes");
    //+ Usado por ejemplo cuando se abre un archivo, para siempre cerrarlo
}
 */


// &[setTimeout() | HTML          -   04:07:27]
/* 
//+ setTimeout() = Invoca una funcion luego de un numero de milisegundos
//+                 Funcion Asyncrona (no para la ejecucion, la hace aparte)

let item = "CryptoCurrency";
let price = 420.69;

//+ Se le pasa una funcion, un callback, o una arrow function
//+ Creo que los argumentos luego del tiempo son los de la propia funcion callback
let timer1 = setTimeout(firstMessage, 1000, item, price);
let timer2 = setTimeout(secondMessage, 2000);
let timer3 = setTimeout(thirdMessage, 3000);

//+ (callback que sera llamada, luego de X tiempo)

function firstMessage(item, price){
    alert(`Buy This ${item} Course For $${price}!`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}

document.getElementById("myButton").onclick = function(){
//+ con "clearTimeout" se pueden eliminar los setTimeouts, para esto se le pasa una id
//+ id la cual es donde se guarda el timeout (variable)
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for Buying <3");
}
 */


// &[setInterval() |          -   04:12:16]
/* 
//+ setInterval() = invoca una funcion repetidamente luego cierta cantidad de milisegundos
//+                 Funcion Asyncrona


let count = 0;
let max = window.prompt("Count up to What #?");

max = Number(max);

//+ se la pasa una funcion, callback, arraw function, igual que antes
const myTimer = setInterval(countUp, 500);
//+ igual que antes, si necesitamos pasar variables a la funcion/callback
//+ Los pasamos luego del timer igual que antes

function countUp(){
				count++;
				console.log(count);
				if(count >= max){
								//+ Para eliminar el Interval
								clearInterval(myTimer);
				}
}
 */


// &[Date objects | HTML          -   04:14:48]
/* 
//+ El objeto "Date" es usado para trabajar con fechas y tiempos
let date = new Date(); //+ Si no se le pasa nada, agarra el tiempo actual
date = date.toLocaleString(); //+ Mas leible
console.log(date);
document.getElementById("myLabel").innerHTML = date;
console.log("===[]===");

let epic1 = new Date(0); //+ el "Epic" es el tiempo inicial del tiempo en progra, el de hace mucho
//+ Si pasamos cualquier numero al crear un "Date", sera los milosegundos
//+ luego de la fecha del "Epic"
console.log("Origin", epic1.toLocaleString());
let epic2 = new Date(10_000_000_000);
console.log("After", epic2.toLocaleString());

console.log("===[]===");
//+ Pasa la fecha actual con lugar y todo, asumo de cuando se creo el Objeto
console.log(date);

//+ Podemos pasarle una hora y dia especifico si usamos el constructor
//+ Año, Mes (empezando en 0), dia, hora, minuto, segundo, miliseg
let date2 = new Date(2023, 0, 1, 12, 40, 5, 0);
console.log(date2.toLocaleString());
console.log("===[]===");
//+ Tambien se puede pasar la presentacion en string de ese tiempo
console.log(new Date("January 1, 2023 00:00:00").toLocaleString());

console.log("===[]===");
//+ Tambien podemos obtener cosas especificas, de una var especifica
date = new Date();
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milis = date.getMilliseconds();
console.log("Year:", year);
console.log("dayOfMonth:", dayOfMonth, "\ndayOfWeek:", dayOfWeek, "\nmonth:", month,
"\nhour:", hour, "\nminutes:", minutes, "\nseconds", seconds, "\nmilis", milis);


console.log("===_[]_===");
//+tambien podemos asignar el tiempo
date.setFullYear(2024);
date.setDate(31);
//!date.setDay(5); //!no Existe
date.setMonth(11); //+Diciembre, mes 12, porque empieza en 0
date.setHours(23); //+Formato de 12H
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(69);

year = date.getFullYear();
dayOfMonth = date.getDate();
dayOfWeek = date.getDay();
month = date.getMonth();
hour = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
milis = date.getMilliseconds();

console.log("year", year, "\ndayOfMonth:", dayOfMonth, "\nmonth:", month,
"\nhour:", hour, "\nminutes:", minutes, "\nseconds", seconds, "\nmilis", milis);


//+ Tambien podemos crear nuestras propias funciones para "formatear" el tiempo

function formatDate(date){
				let year = date.getFullYear();
				let month = date.getMonth() + 1; //+ +1 para que sea ya mea de 1 a 12
				let day = date.getDate();
				
				return `${day}/${month}/${year}`;
}
function formatTime(date){
				let hours = date.getHours();
				let minutes = date.getMinutes();
				let seconds = date.getSeconds();
				let amOrPm = hours >= 12 ? "pm" : "am" ; //+ Esta en tiempo militar, osea 24H
				
				hours = (hours % 12) || 12; //+ de Militar a Estandar
				
				return `${hours}H:${minutes}mins:${seconds}sec ${amOrPm}`;
}

document.getElementById("myLabel2").innerHTML = `${formatDate(date)} | ${formatTime(date)}`;
 */


// &[clock program | HTML          -   04:24:08]
/* 
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    //& Para darle Formato a lo obtenido
    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = (hours >= 12) ? "am" : "pm";

        //+ Quitarlo de tiempo Militar
        //*console.log(hours, (hours % 12), ((hours % 12) || 12), (12%12), ((12%12)||12));
        hours = (hours % 12) || 12;     //+ Si es igual a 12, el % retorna 0 y se activa el ||

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);
        return `${hours}H:${minutes}min:${seconds}sec ${amOrPm}`;
    }

    //& Para dale 0 antes de
    function formatZeros(time){
        time = time.toString();

        //+ Si es mas corto a 2 digitos, le vamos a poner un 0 antes a ese "time", si no, lo dejamos igual
        return time.length < 2 ? ("0"+time) : time; 
    }
}
 */


// &[asynchronous |          -   04:28:56]
/* 
//+ syncronous code = Codigo en Secuencia Ordenada.
//+                     Paso a paso, Instrucciones "Lineales"
//+                     (Empiza ahora, Termina ahora)

console.log("Start"); console.log("This is syncronous"); console.log("Finished");
//+ asyncronous code = Codigo "Fuera de Secuencia"
//+                     Ej: Acceder a la Base de datos
//+                     Agarrar un Archivo, tareas que toman tiempo
//+                     (Empiza ahora, finaliza en algun punto despues)

console.log("===[]===\nStart");
setTimeout(() => {
        console.log("This is asyncronous");
    }, 1000);
console.log("Finished");
 */


// &[console.time() |          -   04:31:17]
/* 
//+console.time() = Inicia un Cronometro que podemos usar para medir
//+                     cuanto tarda una operacion en realizarse
//+                     Podemos darle a cada Cronometro un nombre diferente

console.time("ResponseTime");   //+ Inica el Cronometro, lo de dentro de los () es el nombre

alert("Click Me");
setTimeout(() => {console.log("Hello")}, 50000);  //+ Ignora las Operaciones Asyncronas

console.timeEnd("ResponseTime");    //+ Detener el Cronometro, hay que pasarle el mismo nombre con el que se inicio
 */


// &[promises |          -   04:33:46]
/* 
//+ promise = Objeto que encapsula los resultados de operaciones Asyncronas
//+             Permite a Metodos Asyncronos retornar un valor (como lo hacen las funciones syncronas)
//+             "Prometo retornar algo en un futuro" (no da error pues)

//+             El "STATE" (Estado) de la promesa es "pending" (pendiente)
//+             Luego es: "fulfilled" (cumplida) o "rejected" (rechazada)
//+             el RESULT es lo que se puede retornar
//+             Tienen 2 Partes: Codigo de Produccion, Codigo de Consumo (Lo que se hace si es cumplida la promesa)

//+ se Crean Asi:
const promise = new Promise((resolve, reject)=>{

    let fileLoaded = false;  //+ Proceso que seria Asyncrono por el tiempo que tarda el archivo en cargar
//+ Cuando el proceso termina, la promesa puede retornar algo O agarra algun error si lo hay

    if(fileLoaded){resolve("File Loaded");}
    else{reject("File Rejected");}

    });//+ le podemos pasar un callback, funcion, o =>
//+ si la Promesa no tiene errores, invoca "Resolve", si no "Reject" (funciones que se le pasan)


//+ then : Se invoca SI la promesa ah sido cumplida, igual, callback, function, =>
//+ catch : Se invoca Si la promesa Falla, igual, callback, function, =>
promise.then(value => console.log(value))
        .catch(error => console.log(error));    //+ El then() y el catch() van seguidos, tipo ".then().catch()" 

//+ No es necesario Rechazar una promesa, pero entonces si hay un error no se hara nada al respecto (Si eliminamos el Else y el "rejected")

//+Para pasar argumentos de a la funcion, los pasamos antes de crear la promesa, y que la propia promsesa sea una =>
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
time = Number(window.prompt("Give Time in MiliSeconds"));
wait(time).then(() => {console.log("Thx for Waiting", time, "secs")});
 */


// &[async |          -   04:40:23]
/* 
//+ async = Hace que una funcion retorne una promesa
//+ va muy bien con el await
async function loadFile(){
    let fileLoaded = true;
    //+ Es una funcion, no tenemos que pasarle otras NECESARIAMENTE, podemos solo usar
    //+ "return" si es "cumplida", o si no el "throw" pa dar un error que poder capturar y listo
    if(fileLoaded){return "File Loaded";}
    else{throw "File Rejected";}
}

//+ Llamamos a la propia funcion ahora, que realmente es una promesa en si 
//+ (como si le pusieramos una promesa, igual que arribam es vez de invocar la funcion)
loadFile().then((value) => {console.log(value)})
    .catch((error)=>{console.log(error)});

//! Ejemplo mas Claro:
function loadFile2(){
    let fileLoaded = false;
    if(fileLoaded){return Promise.resolve("FileLoaded");}
    else{return Promise.reject("File NOT Loaded");}
}

loadFile2().then((value) => {console.log(value)})
    .catch((error)=>{console.log(error)});
 */


// &[await |          -   04:43:12]
/* 
//+ await = Hace a una funcion Asyncrina (async) esperar por una promesa
async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){return "File Loaded";}
    else{throw "File Rejected";}
}

//+ de esta forma se usa, en vez del ".then().catch()", ponemos await antes de llamar la funcion
//+ PERO el await en si solo se puede llamar dentro de otra funcion asyncrona en 1er lugar
async function startProcess(){
    //+ Toca usar el try para agarrar el error
    //+ Util si tenemos que trabjar con mas de 1 funcion Asyncrona

    try {
        let message = await loadFile();
        console.log(message);
        message = await loadFile();
        console.log(message);
        message = await loadFile();
        console.log(message);
    } catch (error) {
        console.log(error);}
    ;}

startProcess();
 */


// &[ES6 Modules | HTML          -   04:46:44]
/* 
//+ La idea detras de un Modulo es que: es un archivo de codigo rehusable
//+ Podemos importar secciones de codigo pre-escrito para usar donde y cuando sea
//+ Genial para cualquier cualquier valor de utilidad y funciones de utilidad
//+ Ayuda a hacer nuestro codigo mas rehusable y mantenible
//+ Se puede pensar de mos modulos, como capitulos de un libro

//+ podemos exportar e importar cosas
//+ para exportar ponemos "export" antes de la declaracion de la var (antes de const, let, function, ect...)
//+ para importar (solo lo que posea export en otro archivo) podemos "import {} from '' " y los nombres de las var y funct que deseamos
//+ el " ./ " indica que es una direccion relativa al archivo

import {PI, getCircumference, getArea} from "./math_util.js";
console.log(PI);
console.log(getCircumference(10));
console.log(getArea(10));
//+ podemos importar especificando las cosas que deseamos, o en general todo con " * "
//+ si lo hacemos con todo, tenemos que ponerle un "alias", del tipo "import * as [alias]"
console.log("===[]===");
import * as MathUtil from "./math_util.js"; //+ Si lo hacemos asi es tipo una clase, tenemos que hacerlo con el [alias].[var/func], igual que Python Modules, o que usar el modulo "Math"
console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
 */


// &[DOM intro | HTML          -   04:51:21]
/* 
//+ DOM = Document Object Model (API = Aplication Programing Interface) / "Modelo Objeto del Documento" (Tecnicamente una API, que es una Interfaz de programación de aplicaciones)
//+         Una interfaz para encadenar contenido de una pagina
//+         Esta ordenada como un arbol de alta jerarquia

console.log(document); //+ el DOM en si y todo lo que contiene
console.dir(document); //+ Todas las propiedades del DOM
console.log(document.title, document.URL);  //+ Acceder a algunas de sus propiedades

document.title = "Never Gonna Give You Up BRO!";
// document.location = "http://www.google.com";    //+ Nos lleva a google, como encadenacion de paginas
document.body.style.backgroundColor = "skyblue";    //+ Accedemos al nodo "Body" (Nodo son las tag principales) y luego a un atributo de este
document.getElementById("myDiv").innerHTML = "Hello";
 */


// &[element selectors | HTML          -   04:54:50]
/* 
//+ Obtener por ID
let header = document.getElementById("myTitle");
header.style.backgroundColor = "lightgreen";


//+Obtener por "name"
let fruits = document.getElementsByName("fruits");  //+ Retorna una "NodeList", similar pero no igual a un array
console.log(fruits);    //+ la NodeList, se aprecia porque es difernete a un array (Todos los Atributos que posee)
console.log(fruits[0]);    //+ 1 de esos Nodos en especifico
fruits.forEach(fruit => {
    if(fruit.checked){console.log(fruit.value)}     //+ Se muestran las seleccionadas
})


//+ Obtener por tipo de Tag
let vegetables = document.getElementsByTagName("li");   //+ Retorna una "HTMLCOllection"
console.log(vegetables);
vegetables[1].style.backgroundColor = "brown";
console.log(vegetables[1]);


//+ Obtener por nombre de clase
let desserts = document.getElementsByClassName("desserts"); //+ Retorna "Array-Like-Object"
console.log(desserts);
console.log(desserts[1]);
desserts[1].style.backgroundColor = "lightpink";


//+ Obtener por "querySelector" (por todo lo de atras pues) // Le podemos pasar Id, Classname, Tagname, Atributo
let element = document.querySelector("#myTitle");  //+ Si es por Id, se le tiene que poner un " # " antes de la ID
element.style.backgroundColor = "teal"; 

let className = document.querySelector(".desserts"); //+ si es una CLasname, tiene que tener un " . " antes del ClassName
className.style.backgroundColor = "lightblue";  //+Query Selector selecciona SOLO el 1er elemento, si queremos todos, es con otra funcion "querySelectorAll"

let tagName = document.querySelector("li"); //+ TagName, no lleva nada especial
tagName.style.backgroundColor = "orange";    //+ Nuevamente, solo el 1er Elemento

let atribute = document.querySelector("[for]"); //+ Atributo, atributo HTML que contenga un componente
atribute.style.backgroundColor = "red";    //+ Nuevamente, solo el 1er Elemento


//+ Obtener por "querySelectorAll" Osea todos los elementos que lo posean a la vez
let elements = document.querySelectorAll("[for]");
elements.forEach(elem=>{
    elem.style.fontStyle = "italic";
    elem.style.fontFamily = "Fantasy Gothic";
    elem.style.fontSize = "2rem";
})
 */


// &[DOM traversal | HTML          -   05:03:35]
/* 
//+ Los componentes en el HTML son Hijos Padres y Hermanos y unos de otros dependiendo de su Jerarquia (X Esta contenido en Y, igual que Z que esta antes/despues de X)
//+ .firstElementChild
//+ .lastElementChild
//+ .parentElement
//+ .nextElementSibling
//+ .previousElementSibling
//+ .children[]
//+ .Array.from(.children)


let body = document.body;
let child = body.firstElementChild;  //+1er Elemento que es un hijo, en este caso toda la 1ra lista <ul>
console.log(body.lastElementChild);   //+ultimo Elemento que resulta ser la ScripTag
child.style.backgroundColor = "lightgreen";

let element1 = document.querySelector("#vegetables");   //+1er Elemento de id "vegetables"
let parent = element1.parentElement;                    //+ Padre de dicho elemento (<body>)
parent.style.backgroundColor = "lightblue";

let sibling1 = element1.nextElementSibling;              //+ Siguiente Tag Hermana (siguiente en el mismo nivel de jerarquia del <ul> en este caso)
sibling1.style.backgroundColor = "orange";               //+ Resulta en la Siguiente lista (la de #desserts)
let sibling2 = element1.previousElementSibling;              //+ Anterior Tag Hermana (siguiente en el mismo nivel de jerarquia del <ul> en este caso)
sibling2.style.fontFamily = "Fantasy";               //+ Resulta en la Anterior lista (la de #fruits)

let child1 = element1.firstElementChild;
child1.style.fontSize = "1.5rem";                   //+ carrots
let child2 = element1.lastElementChild;
child2.style.fontSize = "1.2rem";                   //+ Banana
let child3 = element1.children[1];
child3.style.fontFamily = "Times New Roman";        //+ potatoes

let element2 = document.querySelector("#desserts");
console.log(element2.children);                 //+ Como tal el ".children" retorna es una colleccion de elementos, tenemos que convertirlo a Array Aun
let children = Array.from(element2.children);   //+ "Array.from" convierte la colleccion a un array, mientras que los elementos de la colleccion sean "Iterables"
console.log(children);                          //+ lo Pasamos a array para poder usar el forEach()
children.forEach(child => {
    child.style.fontFamily = "MV Boli"
});
 */


// &[add/change HTML elements | HTML          -   05:09:01]
/* 
const nameTag = document.createElement("h1");   //+ Creamos un Elemento con la tag que le pasemos en el medio
//+ Esta vacia, le podemos añadir texto o con:
//+ ".innerHTML"    (Vulnerable a ataques XSS)(Cross Site Scripting attacks)
//+ ".textContent" (que es mas seguro)

nameTag.textContent = window.prompt("Enter Your Name"); //+ Si esto fuera con .innerHTML, aqui le podriamos meter un script y modificamos todo el codigo
//+ Le Añadimos la propiedad, pero la tag no esta añadida al HTML en si aun
document.body.append(nameTag);  //+ Asi la añadimos al <Body>

const myList = document.querySelector("#fruits");   //+ Tag a Añadir
//+ Añadir al Inicio de la Lista
const listItemMango = document.createElement("li");      //+ Tag Creada
listItemMango.textContent = "mango";
myList.prepend(listItemMango);                            //+ Añadir al Inicio de la Lista
//+ Añadir al Final de la Lista
const listItemAvocado = document.createElement("li");
listItemAvocado.textContent = "avocado";
myList.append(listItemAvocado);                            //+ Añadir al Final de la Lista
//+ Añadir en algun Punto del Medio de la Lista
const listItemPear = document.createElement("li");
listItemPear.textContent = "pear";
myList.insertBefore(listItemPear, myList.getElementsByTagName("li")[2]);    //+Elemento a Añadir, Donde (en este caso, agarramos todos los li del "myList", y decidimos una index donde añadirlo)
 */


// &[add/change CSS properties | HTML          -   05:14:01]
/* 
const title = document.getElementById("myTitle");

title.style.backgroundColor = "#222222"; //+ Tambien se puede Hexadecimal dentro del "" tipo "#222222"
title.style.color = "rgba(50, 200, 250)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "none";   //+ Oculta el Elemento
title.style.display = "block";   //+ Muestra el Elemento
 */


// &[events | HTML | CSS          -   05:18:26]
/* 
//+ event = Algun cambio que hace el Usuario o el Navegador
//+ .onclick
//+ .onload
//+ .onchange
//+ .onmouseover
//+ .onmouseout
//+ .onmousedown
//+ .onmouseup

function doSomethingClick(){alert("Do SomethingClick");}
function doSomethingLoad(){alert("Do SomethingLoad");}
function doSomethingChange(){alert("Do SomethingChange");
        console.log("Before", this.value);
        this.value = this.value.toString().toUpperCase();
        console.log("After", this.value);}
function doSomethingMouseOver(){this.style.backgroundColor = "red";}
function doSomethingMouseOut(){this.style.backgroundColor = "lightgreen";}
function doSomethingMouseDown(){this.style.backgroundColor = "lightgreen";}
function doSomethingMouseUp(){this.style.backgroundColor = "lightblue";}

//+Al Clikear
const button2 = document.getElementById("myButton2");
button2.onclick = doSomethingClick;  //+Callback, no invocar

//+ Al cargar el componente, ejemplo el Body pa que sea al inicio
const body = document.body;
body.onload = doSomethingLoad;

//+ Al cambiar el componente, ej el estado de un input/textBox, ejemplo para formatearlo luego de dejar de escribit/salir del la textBox
const text = document.getElementById("myText");
text.onchange = doSomethingChange; //+Callback, no invocar

//+ Al hacer acciones de Mouse (Hay Mas)
const div = document.getElementById("myDiv");
div.onmouseover = doSomethingMouseOver;
div.onmouseout = doSomethingMouseOut;
div.onmousedown = doSomethingMouseDown;
div.onmouseup = doSomethingMouseUp;
 */


// &[addEventListener() | HTML | CSS          -   05:24:32]
/* 
//+ .addEventListener(event, function, useCapture) = Linkear un evento a un componente HTML, que realice una funcion/evento
//+ Se puede añadir muchos "event handlers" (manejadores de evento) a 1 solo elemento.
//+ El mismo evento puede invocar diferenres funciones

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

//+ Se añade el event listener de tipo comp.addEventListener("event", function)
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);

//+ Tiene otro parametro, el "useCapture", si un elemento esta dentro de otro, y ambos esperan el mismo evento? cual se lleva a cabo 1ro?
innerDiv.addEventListener("mousedown", changeBlue);
outerDiv.addEventListener("mousedown", changeBlue, true);   //+ El true ahi es el "useCapture", pa que se llame 1ro en el cual se puso true
innerDiv.addEventListener("mouseup", changeGreen);
outerDiv.addEventListener("mouseup", changeGreen);


function changeRed(){
    innerDiv.style.backgroundColor = "red";
}
function changeGreen(){
    this.style.backgroundColor = "lightgreen";
}
function changeBlue(){
    alert("You Selected " + this.id);   //+ Podemos ver que se hace el pequeño de 1ro de normal, o si el "useCapture" es true, el que lo posea
    this.style.backgroundColor = "rgb(50,200,250)"; //+ "this", lo que llamo el evento
}
 */


// &[show/hide HTML elements | HTML | CSS          -   05:30:28]
/* 
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {

    // console.log(myImg.style.display);   //+ Si la queremos Oculta, el Css no se carga antes que el HTML, por eso a menos que po ngamos el Style ahi, esto aparece vacio de 1ro
    // if(myImg.style.display == "none"){
    //     myImg.style.display = "block";  //+ Muestra la Imagen
    // }
    // else{
    //     myImg.style.display = "none";   //+ Oculta la Imagen
    // }


//+ con el uso de "visibility" en vez de "Display" el espacio que tomaria la imagen se respeta
    console.log(myImg.style.visibility);
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";  //+ Muestra la Imagen
    }
    else{
        myImg.style.visibility = "hidden";   //+ Oculta la Imagen
    }
        }
    );
 */


// &[detect key presses | HTML | CSS          -   05:35:28]
/* 
//+ Añadir el listener a la propia window
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0; 
let y = 0;

function move(event){
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}
 */


// &[animations | HTML | CSS          -   05:40:21]
/* 
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
    let timerId = null; //Para poder manjear la animacion
    let x = 0;
    let y = 0;
    let degrees = 0;
    let scaleX = 1; //+ 1 = 100%
    let scaleY = 1; //+ 1 = 100%

    timerId = setInterval(frame, 5);    //cada cuento se actualiza


    function frame(){
        //+ Que se mueva en diagonal el div
        
        // if(x >= 200 || y >= 200){clearInterval(timerId);}
        // else{
        //     x++;
        //     y++;
        //     myAnimation.style.left = x + "px";
        //     myAnimation.style.top = y + "px";
        // } 
       
        // //+ Que rote sobre si mismo
        
        // if(degrees >= 360){clearInterval(timerId);}
        // else{
        //     degrees+=5;
        //     myAnimation.style.transform = "rotateX("+degrees+"deg)";
        //     myAnimation.style.transform = "rotateY("+degrees+"deg)";    //+ Solo se lleva a cabo el ultimo, o es el que se ve
        //     myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        // }

        if(scaleX <= 0.1 || scaleY <= 0.1){clearInterval(timerId);}
        else{
            scaleX -= 0.01;     //+1%
            scaleY -= 0.01;     //+1%
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}
  */


// &[canvas API | HTML | CSS          -   05:49:40]
/* 
//+ Canvas API = Una forma de dibujar graficos
//+                 Usado para Animaciones, juegos, visializacion de data, etc...

let canvas = document.querySelector("#myCanvas");   //+ Como el Frame/Recuadro de una Pintura
let context = canvas.getContext("2d");              //+ La Pintura en si de dicho cuadro, de Dibuja aqui

//+ Dibujar Lineas
// context.strokeStyle = "rgba(50,200,250)";   //+ Color del Dibujo
// context.lineWidth = 5;  //+ Grosor de los Pixeles del Dibujo
// context.beginPath();    //+ Empiece el Dibujo
// context.moveTo(0, 0);   //+ Se Mueva a x, y posicion, que empiece de ahi
// context.lineTo(canvas.width/2, canvas.height/2);   //+ Cordenadas para dibujar una linea
// context.lineTo(canvas.width/2, canvas.height);   //+ Otra Linea
// context.moveTo(500, 0);   //+ Empezar a Dibujar en Otro lado
// context.lineTo(canvas.width/2, canvas.height/2);   //+ Otra Linea
// context.stroke(); //+ La Dibujada en si

//+ Dibujar un Triangulo a Pata
// context.strokeStyle = "Orange";
// context.fillStyle = "yellow";   //+ Color de Rellenado
// context.lineWidth = 10;         //+ Del Stroke/Borde
// context.beginPath();
// context.moveTo(canvas.width/2, 0);
// context.lineTo(0, canvas.height/2);
// context.lineTo(canvas.width, canvas.height/2);
// context.lineTo(canvas.width/2, 0);
// context.stroke();       //+ "Borde"
// context.fill();         //+ Rellenado

//+ Dibujar Rectangulos fillRect(x, y, width, height)
// context.fillStyle = "black";
// context.lineWidth = 3;
// context.fillRect(canvas.width/2, canvas.height/2, canvas.width, canvas.height);//+ x, y, width, height
// context.strokeStyle = "black";
// context.strokeRect(canvas.width/2, canvas.height/2, canvas.width, canvas.height);//+ x, y, width, height

// context.fillStyle = "red";
// context.lineWidth = 3;
// context.fillRect(0, 0, canvas.width/2, canvas.height/2);//+ x, y, width, height
// context.strokeStyle = "black";
// context.strokeRect(0,0,canvas.width/2, canvas.height/2);//+ x, y, width, height

// context.fillStyle = "green";
// context.lineWidth = 3;
// context.fillRect(0, canvas.height/2, canvas.width/2, canvas.height);//+ x, y, width, height
// context.strokeStyle = "black";
// context.strokeRect(0, canvas.height/2, canvas.width/2, canvas.height);//+ x, y, width, height

// context.fillStyle = "orange";
// context.lineWidth = 3;
// context.fillRect(canvas.width/2, 0, canvas.width, canvas.height/2);//+ x, y, width, height
// context.strokeStyle = "black";
// context.strokeRect(canvas.width/2, 0, canvas.width, canvas.height/2);//+ x, y, width, height

//+ Dibujar Circulo arc(x, y, r, sAngle, eAngle, counterClockWise)
// context.fillStyle = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// //+ x, y = Centro del Circulo 
// //+ r = Radio
// //+ sAngle eAngle = Starting angle, Ending angle
// //+ counterClockWise = Siguiendo las Agujas del Reloj
// context.arc(canvas.width/2, canvas.height/2, 200, 0, 2*Math.PI);   //+ de 0 a 2PI, circulo Entero
// context.stroke();
// context.fill();

//+ Dibujar Texto
context.font = "50px Mv Boli";
context.fillStyle = "orange";   //+ Color del Texto
canvas.textAling = "center";
context.fillText("YOU WIN!", canvas.width/2, canvas.height/2);  //+ Texto, Coordenadas a aparecer (encima)
 */


// &[window | HTML | CSS          -   06:02:34]
/* 
//+ window = Un Objeto/Interface usada para hablar con el navegador web
//+             El DOM es una propiedad de la window 

console.dir(window);
console.dir(window.document);   //+Este es el DOM

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.scrollX);    //+ Retorna el valor en donde se encuentra
console.log(window.scrollY);    //+ Retorna el valor en donde se encuentra

console.log(window.location.href);  //+ URL
// window.location.href = "https://youtube.com"    //+Redireccion a YT

console.log(window.location.hostname);  //+ la direccion?
console.log(window.location.pathname);  //+ Donde llega

const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", () => {window.open("https://youtube.com");});    //+ Cada vez que le demos, abre un nueva ventana
// myButton.addEventListener("click", () => {window.close();});    //+ Cada vez que le demos, cierra la ventana actual
// myButton.addEventListener("click", () => {window.print();});    //+ Cada vez que le demos, vamos a imprimir la ventana

// window.alert("Hello");
// console.log(window.confirm("Press OK to continue")); //+ Confirmar o negar algo (Retorna true/false)

// let age = window.prompt("Enter Your Age");
// if(age < 18){
//     window.alert("You must be 18+ to Enter");
//     window.close();
// }
 */


// &[cookies | HTML | CSS          -   06:08:43]
/* 
//+ cookie = Un pequeño archivo de texto guardado en el computador
//+             Usado para recordar informacion sobre el usuario
//+             Guardado en pares "name-value" 

// console.log(navigator.cookieEnabled);   //+ Activadas o no

//+ nombre=valor; expira= (Fechay Hora); path=
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquearePants; expires=Sun, 1 January 2010 12:00:00 UTC; path=/";
// console.log(document.cookie);   //+ Se Pueden guardar varias, y se pueden sobreescibir, si ya "Expiro", se elimina sola

// setCookie("email", "Sponge@Gmail.com", 365);
// deleteCookie("email");
// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SquearePants", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
    });
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
    });

//+ Al Darle "Cookies" nos pondra automaico lo que habiamos puesto en la cookie y lenara el TextField con eso


function setCookie (name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);    //Tiempo actual, + dias, convertido en milis (dias, horas, mins, seg, milis)
    let expires = "expires=" + date.toUTCString();  //+ Toca ponerlo de esa forma rara
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name){
    setCookie(name, null, null);    //+ Accedemos con el nombre, le quitamos el valor, y le quitamos el tiempo
}
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);   //+cDecoded = cookieDecoded
    const cArray = cDecoded.split("; ");         //+cArray = cookieArray
    let result = null;
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){ //+ Si el elemento, en la index de "name" coincide
            result = element.substring(name.length+1);  //+ Retornala lo que este luego del "name=" en el "name=value"
        }
    })
    return result;
}
 */


// &[stopwatch program | HTML | CSS          -   06:22:57]
/* 
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
        if (paused){
            paused = false; //+ No se ah parado el timer
            startTime = Date.now() + elapsedTime; //+ Tiempo actual en milisegundos - tiempo pasado
            intervalId = setInterval(updateTime, 75);   //+ Timer
            }
        }
    );
//+ Error al Pararlo y Continuarlo, sin Reset
pauseBtn.addEventListener("click", () => {
            if(!paused){
                paused = true;
                elapsedTime = Date.now() - startTime;   //+ Cuanto tiempo ah pasado
                clearInterval(intervalId);  //+ Parar el Timer
            }
        }
    );
resetBtn.addEventListener("click", () => {
            paused = true;
            clearInterval(intervalId);
            startTime = 0;
            elapsedTime = 0;
            currentTime = 0;
            secs = 0;
            mins = 0;
            hrs = 0;
            timeDisplay.textContent = "00:00:00";
        }
    );


function updateTime () {
    elapsedTime = Date.now() - startTime;   //+ Tiempo en milis

    secs = Math.floor((elapsedTime / 1000) % 60) //+ Sacar los milis del "elapsed" a Segs, y hacer "%60" para que el resultado no salga de eso
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)     //+ 60.000 milis en cada seg
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);    //+

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ?  unit : "0"+unit;
        // Basicamete esto:
        //     case = "0" + unit;
        //     if(case.length > 2){
        //         return unit;
        //     }
        //     else {return case}
        // osease si lo extenso del texto luego de sumarle "0", supera 2 digitos, no le hagas nada, si no, devuevelo sumado, pa hacer el formato
        
    }
}
 */


// &[rock paper scissors game | HTML | CSS          -   06:35:11]
/* 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;    //+ Cual Boton le demos, cual boton llame al listener, sera del cual copiaremos la "seleccion" (el texto del h1)
    computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));


function computerTurn (){
    const randNum = Math.floor((Math.random() * 3) + 1);    //+ 3 Posibilidades

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){    //+ si la pc eligio roca
        return (player == "PAPER") ? "You Win!" : "You LOSE!!"; //+ y nosotros papel, ganamos
    }
    else if(computer == "PAPER"){    //+ si la pc eligio papel
        return (player == "SCISSORS") ? "You Win!" : "You LOSE!!"; //+ y nosotros tijeras, ganamos
    }
    else if(computer == "SCISSORS"){    //+ si la pc eligio tijeras
        return (player == "ROCK") ? "You Win!" : "You LOSE!!"; //+ y nosotros roca, ganamos
    }
}
 */


// &[tictactoe game | HTML | CSS          -   06:46:46]
/* 
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const windConditions = [    //+ Combinaciones de pos de todos las posibles formas de Ganar
    [0,1,2],    //+     <-> Horizontal
    [3,4,5],    //+     <-> Horizontal
    [6,7,8],    //+     <-> Horizontal
    [0,3,6],    //+     |   Vertical
    [1,4,7],    //+     |   Vertical
    [2,5,8],    //+     |   Vertical
    [0,4,8],    //+     \   Diagonal
    [2,4,6]     //+     /   Diagonal
];
let options = ["","","","","","","","",""]; //+ Texto de las Columnas
let currentPlayer = "X";
let running = false;

initGame();


function initGame(){
    cells.forEach(cell => {cell.addEventListener("click", cellClicked)});
    restartBtn.addEventListener("click", restartGame);
    statusText.textcontent = `${currentPlayer}''s Turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");    //+ Obtener el atributo creado por nosotros

    if(options[cellIndex] != "" || !running){   //+ Si no esta vacio, o si no se esta jugando
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
};

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
};

function changePlayer(){
    currentPlayer = ( currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s Turn`;
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < windConditions.length; i++){
        const condition = windConditions[i];    //+ Para pasar por todas las condiciones
        const cellA = options[condition[0]];    //+ chekear cada pos de las condiciones individualmente
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;   //+ Skippear la iteracion
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} Wins!`;
        running = false;
    }
    else if(!options.includes("")){ //+ Si nuestra tablero se quedo sin espacio posible, y no se gano ya
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{changePlayer();}
}

function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s Turn`;
    cells.forEach(cell=>{cell.textContent = "";});
    running = true;
};
 */


// &[snake game | HTML | CSS          -   07:05:43]
/* 
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");     //+Context, to Draw on
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const gameWidth = gameBoard.width;      //+ Los podemos acceder al estar puestos en el HTML directamemte
const gameHeight = gameBoard.height;    //+ Si se ponen en el CSS no podemos acceder a estos de esta forma (con el getWidth) asumo
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let tickSpeed = 25; //+Milis

let snake = [   //+ Coordenadas en forma de Objetos, caa Objeto es una parte del cuerpo
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize * 1, y:0},
    {x:0, y:0},
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, tickSpeed); //+ Milis para cada Tick
    } else {displayGameOver();}
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood(){
    function randomFood(min, max){
        //+ Numero Random, entre lo minimo y max del "tablero", entre el tamaño de cada celda * tamaño de la celda (Coordenada verdadera)
        const randNum = Math.round(((Math.random() * max - min) + min) / unitSize) * unitSize;
        return randNum;
    }

    foodX = randomFood(0, gameWidth-unitSize);
    foodY = randomFood(0, gameWidth-unitSize);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    //+ To Not Be Able to go Out of Bounds
    //if(snake[0].x+ xVelocity > gameWidth-unitSize || snake[0].x+ xVelocity < 0){return;}
    //if(snake[0].y+ yVelocity > gameHeight-unitSize || snake[0].y+ yVelocity < 0){return;}
    const head = {
        x: snake[0].x + xVelocity, 
        y: snake[0].y + yVelocity
    };    //+ Nuevo Objeto en las coordenadas en que nos dirigimos
    snake.unshift(head);    //+ Agregamos la Cabeza

    //& Si Cabeza de la Serpiente Colisiona con la Comida
    if(snake[0].x == foodX && snake[0].y == foodY){
        score++;
        scoreText.textContent = score;
        createFood();
    }else{
        snake.pop();    //+ Eliminar la Cola por si acaso
    }
};
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    ctx.lineWidth = 5;
    snake.forEach((snakePart)=>{
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);   //+ Borde del Cuerpo
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);     //+ Cuerpo
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;   //+ Codigo de la tecla pulsada, que llamo al evento
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch (true) {//+ Si alguna condifion de abajo es verdadera
        case (keyPressed == UP && !goingDown):   //+ No Poder regresar, porque si no nos matamos
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed == DOWN && !goingUp):   //+ No Poder regresar, porque si no nos matamos
            xVelocity = 0;
            yVelocity = unitSize;
            break;
        case (keyPressed == LEFT && !goingRight):   //+ No Poder regresar, porque si no nos matamos
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == RIGHT && !goingLeft):   //+ No Poder regresar, porque si no nos matamos
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        default:
            break;
    }
};
function checkGameOver(){
    switch (true) { //+ Si alguna condifion de abajo es verdadera
        case (snake[0].x < 0):
        case (snake[0].x >= gameWidth):
        case (snake[0].y < 0):
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for(let i = 1; i < snake.length; i++){  //+ Chekear todas las partes, Excepto la Cabeza, que es la comparacion
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){   //+ Si la Cabeza Colisiona Con alguna Parte (Misma coordenada)
            running = false;
        }
    }
};
function displayGameOver(){
    ctx.font = "50px Mv Boli";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth/2, gameHeight/2);
    running = false;
};
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [   //+ Coordenadas en forma de Objetos, caa Objeto es una parte del cuerpo
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize * 1, y:0},
        {x:0, y:0},
    ];
    gameStart();
};
 */


// &[pong game | HTML | CSS          -   07:34:32]
/* 
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");     //+Context, to Draw on
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "orange";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;    //+ Diametro = 25, porque es (Radius*2)
const paddleSpeed = 50;

let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: (gameHeight/2)
};
paddle1.y = paddle1.y-paddle1.height;


let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth-25,
    y: (gameHeight/2)
};
paddle2.y = paddle2.y-paddle2.height;

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
drawPaddles();

function gameStart(){
    createBall();
    nextTick();
};
function nextTick(){
    intervalId = setTimeout(()=>{
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function drawPaddles(){
    ctx.strokeStyle = paddleBorder;
    ctx.lineWidth = 5;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){ //+ Numero Random para Elegir hacia donde va la Bola
        ballXDirection = 1;
    } 
    else{
        ballXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){ //+ Numero Random para Elegir hacia donde va la Bola
        ballYDirection = 1;
    } 
    else{
        ballYDirection = -1;
    }

    ballX = gameWidth/2;
    ballY = gameHeight/2;
    drawBall(ballX, ballY);
};
function moveBall(){
    ballX += ballSpeed * ballXDirection;
    ballY += ballSpeed * ballYDirection;
};
function drawBall(ballX, ballY){
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
};
function checkCollision(){
    if(ballY <= 0 + ballRadius){
        ballYDirection *= -1;
    }
    if(ballY >= gameHeight - ballRadius){
        ballYDirection *= -1;
    }
    if(ballX <= 0){
        player2Score++;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1Score++;
        updateScore();
        createBall();
        return;
    }

    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){  //+ Mayor a su anchor
        if(ballY > paddle1.y && ballY < paddle1.y+paddle1.height){  //+ Dentro su Alto
            ballX = (paddle1.x+paddle1.width)+ballRadius;   //+ Si la bola se Atasca dentro del Paddle
            ballXDirection *= -1;
            ballSpeed+= 0.5;
        }
    }

    if(ballX >= (paddle2.x - ballRadius)){  //+ Menor a su X
        if(ballY > paddle2.y && ballY < paddle2.y+paddle2.height){  //+ Dentro su Alto
            ballX = paddle2.x-ballRadius;   //+ Si la bola se Atasca dentro del Paddle
            ballXDirection *= -1;
            ballSpeed+= 0.5;
        }
    }
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keyPressed){
        case(paddle1Up):
            if(paddle1.y > 0){
                paddle1.y -= paddleSpeed;
            }
            break;
        case(paddle1Down):
            if(paddle1.y < gameHeight-paddle1.height){
                paddle1.y += paddleSpeed;
            }
            break;
        case(paddle2Up):
            if(paddle2.y > 0){
                paddle2.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddle2.y < gameHeight-paddle2.height){
                paddle2.y += paddleSpeed;
            }
            break;
    }
};
function updateScore(){
    scoreText.textContent = `${player1Score} : ${player2Score}`
};
function resetGame(){
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: (gameHeight/2)
    };
    paddle1.y = paddle1.y-paddle1.height;
    
    
    paddle2 = {
        width: 25,
        height: 100,
        x: gameWidth-25,
        y: (gameHeight/2)
    };
    paddle2.y = paddle2.y-paddle2.height;

    ballSpeed = 1;
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalId);
    gameStart();
};
 */


// &[END |          -   ]