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

// &[template literals | HTML         -   01:53:25]
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
// &[array.reduce() |          -   02:50:21]
// &[sort an array of numbers |          -   02:52:33]
// &[function expressions |          -   02:54:41]
// &[arrow function expressions |          -   02:59:55]
// &[shuffle an array |          -   03:05:42]
// &[nested functions |          -   03:09:30]
// &[maps |          -   03:12:47]
// &[objects  |          -   03:17:07]
// &[this keyword |          -   03:21:09]
// &[classes  |          -   03:24:08]
// &[constructors |          -   03:27:15]
// &[END |          -   ]