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
/*document.getElementById("p1").innerHTML = "Hello Bro P1";
    document.getElementById("p2").innerHTML = "Hello Bro P2";
    document.getElementById("p3").innerHTML = "Hello Broo P3"; */


//& [Simple Prompt - 0:21:14]
    /*
    let username = window.prompt("Whats Your Name?: ");
    console.log(username);*/


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

/* let a; 
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


// &[NOT ! operator  |          -   01:20:29]


// &[While Loop  |          -   01:23:26]
/*     // Existe el 
    //      variable = window.promot("Enter Your Name");
    // para obtener input */


    // &[Do While Loop  |          -   01:26:14]
/*     //Basicamente para cuando algo puede estar falso de antemano
    //osea que la condicion del while normal ya este como falsa */


    // &[For Loop  |          -   01:28:36]
/*     for(let counter = 10; counter > 0; counter-=3){
        console.log(counter);
    } console.log("Happy New Year!");*/


    // &[Break & Continue  |          -   01:32:05]
/* for (let i = 0; i <= 20; i++) {
    if(i == 13){continue;}      //+ Se Salta 1 iteracion
    if(i == 19){break;}         //+ Sale por Completo del Loop
    console.log(i);
} */


// &[Nested Loop  |          -   01:33:34]
/* let symbol = window.prompt("Enter a Symbol to use");
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
/* document.getElementById("submitButton").onclick = ()=>{
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


// &[setTimeout() |          -   04:07:27]
// &[setInterval() |          -   04:12:16]
// &[Date objects |          -   04:14:48]
// &[clock program | HTML          -   04:24:08]
// &[asynchronous |          -   04:28:56]
// &[console.time() |          -   04:31:17]
// &[promises |          -   04:33:46]
// &[async |          -   04:40:23]
// &[await |          -   04:43:12]
// &[ES6 Modules |          -   04:46:44]
// &[DOM intro | HTML          -   04:51:21]
// &[element selectors | HTML          -   04:54:50]
// &[DOM traversal | HTML          -   05:03:35]
// &[add/change HTML elements | HTML          -   05:09:01]
// &[add/change CSS properties | HTML          -   05:14:01]
// &[events | HTML          -   05:18:26]
// &[addEventListener() | HTML          -   05:24:32]
// &[show/hide HTML elements | HTML          -   05:30:28]
// &[detect key presses | HTML          -   05:35:28]
// &[animations | HTML          -   05:40:21]
// &[canvas API | HTML          -   05:49:40]
// &[window | HTML          -   06:02:34]
// &[cookies | HTML          -   06:08:43]
// &[stopwatch program | HTML          -   06:22:57]
// &[rock paper scissors game | HTML          -   06:35:11]
// &[tictactoe game | HTML          -   06:46:46]
// &[snake game | HTML          -   07:05:43]
// &[pong game | HTML          -   07:34:32]
// &[END |          -   ]