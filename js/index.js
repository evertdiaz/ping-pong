var curso = {
	titulo: "Curso Javascript",
	videos: 10,
	tutor_value: "Evert",
	/*getTutor: function(){
		return this.tutor;
	},
	setTutor: function(tutor){
		this.tutor = tutor;
	}*/
	get tutor(){
		return this.tutor_value.toUpperCase();
	},
	set tutor(tutor_value){
		if(tutor_value === "" || typeof tutor_value === "undefined"){ return; }
		this.tutor_value = tutor_value;
	}
	
};
function curso2(titulo, videos, tutor){
	this.titulo = titulo;
	this.videos = videos;
	this.tutor = tutor;
	this.getTutor = function(){
		return this.tutor;
	};
	this.setTutor = function(tutor){
		//Validación para no crear objeto con valor vacío
		if(tutor === "" || typeof tutor === "undefined"){ return; }
		this.tutor = tutor;
	};
}
var javascript = new curso2("javascript", 50, "Annn");

console.log(javascript.getTutor());
javascript.setTutor();
console.log(javascript.getTutor());
console.log("**********************");
console.log(curso.tutor);
curso.tutor = "asdasd";
console.log(curso.tutor);

/*C20 y C21

function tutor(nombre, edad, direccion, apellidos){
	this.nombre = nombre || 'NN';
	this.edad = edad || 99;
	this.direccion = direccion || 'Direccion'
	this.saludar = function(){
		console.log("Hola soy "+ this.nombre);
	};
	this.nombre_completo = nombre+ " " + apellidos;
}
var persona = new tutor('Alguien', 22, 'Avenida las calles 69', 'Hernandos Diaz');
persona.saludar();
console.log(persona);
console.log(persona.__proto__);
console.log(persona.__proto__.__proto__);
var jose = new tutor('Jose', 50, 'Por ahi', 'Hole Holon');
jose.iq = 25;
console.log(jose);

tutor.prototype.iq = 100;
tutor.prototype.saltar = function(){
	console.log("salteeee");
}


console.log(persona.iq);
persona.saltar();*/


/*C19:
var alumno = {
	nombre: "Evert",
	edad: "22",
	direccion: "Villa Bonita 4",
	hablar: function(){
		console.log("Hola!, soy "+this.nombre);
	}
};
console.log(alumno);
console.log(alumno['nombre']);
console.log(alumno.nombre);
alumno.hablar();
*/

/*C18: 
(function(){
	var boton = document.getElementById("btn");
	boton.addEventListener('click', function(){
		alert("holaaa");
	});


	setTimeout(function(){
		console.log(hola_mundo("Evert"));
	}, 1000);
})();

function hola_mundo(nombre){
	function construct(){
		return "hola"+nombre;
	}
	return construct();
}*/



/*C17:
var letras = ['J', 'e', 'l', 'o', 'w'];
console.log(letras.join(""));

var palabra = letras.reduce(function(ante, act, index, arreglo){
	console.log(ante);
	console.log(act);
	console.log(index);
	return ante + act;
});
console.log(palabra);

var numeros = [1,2,3,4,5,6,7];
console.log(numeros.reduce(function(anterior, actual, index, arreglo){
	return anterior + actual;
}));
*/



/*C16:
var arr = [2,5,3,6,3];
arr.forEach( function(elemento, index, arr) {
	console.log(elemento);
	console.log(index);
	console.log(arr);
});
*/
/*C15: 
var num = [2,5,7,1,4,436,45,23,46,85,10];

function antemap(arreglo){
	var i = arreglo.length-1;
	var res = [];
	for(;i>=0;i--){
		res[i] = Math.pow(arreglo[i],2);
	}
	return res;
}
console.log(antemap(num));

num = num.map(function(elemento){
	return Math.pow(elemento,2);
});
console.log(num);
*/

/*C14:
var numeros = [1,2,6,4,9,10,324,765,86,523515,355,48,88];
var numeros_pares = [];
var i = numeros.length-1;
for(;i>=0;i--){
	if(numeros[i]%2==0){
		numeros_pares.push(numeros[i]);
	}
}
numeros_pares = numeros_pares.reverse()
console.log(numeros_pares);

numeros_pares = numeros.filter(function(numero){
	return numero%2===0;
});
console.log(numeros_pares);
*/


/*C13:
var reglo = [2,5,7,1,3,68,2,99];
reglo.sort();
console.log(reglo);

var arre = ['hola', 'soy', 'uno', 'o', 'quizas', 'dos', 'arreglos'];
arre.sort();
console.log(arre);

function ordenar(a,b){
	if (a > b){ return 1; }
	else if ( b > a ){ return -1;}
	else if (b == a ){return 0;}
}
function orden_mini(a,b){
	return a-b;
}

reglo.sort(ordenar);
reglo.reverse();
console.log(reglo);

var aglo = "hola, soy, un, arreglo".split(',');
console.log(aglo);
aglo = aglo.join(',');
console.log(aglo);
*/
/*
function hola(a,b){
	b = b || 1;
	a = a || 1;
	var r = a*b;
	return r;


}


console.log(hola());
*/

/*C11:
var arreglo = new Array(20); 
var reglo = [20, 10, 50];
console.log(reglo);
reglo.push(2);
console.log(reglo);

reglo.unshift(1);
console.log(reglo);

reglo.pop(); // elimina el último
console.log(reglo);
var i = reglo.length;
for(;i>=0;i--){
	console.log('elemento '+ i + ': '+reglo[i]);
}
*/

/* C10:
var btn = document.getElementById("btn");
btn.addEventListener('click', function(){
	alert("Holi");
}, true);


var otro = document.getElementById("otro");
otro.addEventListener('click', function(){
	alert("ooootro")
}, false);
*/
/*var main = document.getElementById("main-container");
var second = document.getElementsByClassName("second");
var cajas = document.getElementsByTagName("div");
var prob = document.querySelector(".clase");
var prob = document.querySelector("#main-container");
main.classList.add("clase");
console.log(prob);

//Función para emular selectores de JQuery
function $ (selector){
	var elemento = document.querySelectorAll(selector);
	return elemento;
}
console.log($(".second"));



*/

/*var max = 100;
var min = 1;
var num = Math.random()*(max-min)+min;
var num2 = Math.ceil(Math.random()*100);
var msj = "Por favor ingresa un número: {Con cero se cierra.} ";
num = parseInt(num);
while(true){
	var user = parseInt(prompt(msj,"0"));
	if(user == num2){
		alert("ganaste!");
		break;
	}
	else if(user == 0){
		alert("THANKS!");
		break;
	}
	else if(user > num2){
		alert("MAYOOR");
	}
	else if(user < num2){
		alert("MENOOOR");
	}

}
*/