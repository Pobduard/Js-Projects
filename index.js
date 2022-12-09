// [Show txt html]
/*document.getElementById("p1").innerHTML = "Hello Bro P1";
    document.getElementById("p2").innerHTML = "Hello Bro P2";
    document.getElementById("p3").innerHTML = "Hello Broo P3"; */

// [Simple Prompt]
    /*

    let username = window.prompt("Whats Your Name?: ");
    console.log(username);*/
// {Lil more abdvanced prompt}
/*
    let unsername;
    document.getElementById("MyButton").onclick = function() {
        unsername = document.getElementById("MyText").value;
        console.log(unsername);
        document.getElementById("MyLabel").innerHTML = "Welcome " + unsername;
    }
*/
// [Type Convertion]     // 27:38 mins
/*
    // El Window promot es siempre string al regresar, si lo combinamos con numeros nos actuaria tipo string
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
// [Constants]      // min 30:17
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
// [Math]       // min 33:31
/*
    // Tiene que ser co el Math, m mayuscula o no agarra bien
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
// [Practica, Hipotenisa de u traingulo, pero con input del HTML]       // min36:66
/*
    let a; 
    let b;
    let c;

    document.getElementById("SubmitButton").onclick = function() {
        a = document.getElementById("aTextBox");
                    //console.log(typeof a); //Lo devuelve como objeto
        a = Number(a); 
                    //console.log(typeof a);
        // Recordar que el coso aun nos lo regresa en string
        b = document.getElementById("bTextBox");
                    // console.log(typeof b);
        b = Number(b);
                    // console.log(typeof b);
        c = Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
                    //console.log(typeof c);

        document.getElementById("cLabel").innerHTML = "SideC: " + c;
    }   // Theres a problem but npi
*/
// [Simple Counter]           //min 43:20
/* 
let count = 0;
document.getElementById("DecreaseButton").onclick = ()=>{
    count-=1;
    document.getElementById("CountLabel").innerHTML = count;
}
document.getElementById("ResetButton").onclick = ()=>{
    count = 0;
    document.getElementById("CountLabel").innerHTML = count;
}
document.getElementById("IncreaseButton").onclick = ()=>{
    count+=1;
    document.getElementById("CountLabel").innerHTML = count;
}
*/

// [Random Number in Js]       // Min 47:00

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

// [Useful String propeties & Methods] // Min 52:32

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

// [Slice Method]   //Min 55:18

/* 
// Extrae una seccion de un string dado, la return como un nuevo string, y no modifica el original
let FullName = "Bro Code";
let FirstName, LastName;

FirstName = FullName.slice(0, 3);
LastName = FullName.slice(4);   //Tiene 2 parametros, el 1ro es donde inicia el slice, y el 2do donde finaliza, si no se da el 2do entonces sigue hasta el final del string
console.log(FirstName);
console.log(LastName);
// Pero, funciona con el "IndexOf"/"LastIndexOf"? vamos a ver

LastName = FullName.slice(FullName.indexOf(" ") + 1); // se pone el +1, ya que el index regresado se suponees el espacio, y es lo que vamos a tratar de ignorar aqui
FirstName = FullName.slice(0, FullName.lastIndexOf(" ")); // Mismo de arriba pero conel LastIndexOf
console.log(FirstName);
FirstName = FullName.slice(0, FullName.indexOf(" ")); // Tambien sirve poner el espacio directamente con el IndexOf EN ESTE CASO 
console.log(FirstName);
 */

// [Method Chaining]    // Min 59:25
/* 
// Auto explicativo, llamar un metodo despues de otro, dentro de la misma linea de codigo

let username = " bro "; //Queremos agarrar el 1er char, y hacerlo mayuscula

username[username.indexOf("b")] = username.charAt(username.indexOf("b")).toUpperCase().trim();
console.log(username);
// Como es un string, y queremos cambiar una letra especifica, encontramos donde esta con el IndexOf, y modificamos ese solamente porque nohay necesidad de otros
// igualamos pa que se modifique, y nuevamente damos la posicion especifica, la mandamos a mayuscula, y le hacemos trim a todo pa que quede bonito
 */

// [If Statement in Js]       // Min 1:01:30

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

// [Check propety of check boxes and radio buttons]       // Min 1:05:26 // Basicamente booleano si lacajita esta chekeada o no