



/*C32: let
let nombre = "Evert"
var name = "Evert"
saludo = `${nombre} 
${name}`
console.log(saludo)

init()

function init(){
	
	if(true){
		//Var si puede ser imprimida por el console fuera del bloque
		var n1 = "Evert"	
		//En contraste, let no puede ser impresa ya que fue declarada dentro de un 
		//bloque y let solo tiene alcance de bloque.

		//let n1 = "evert" 
	}
	console.log(n1)

	var nom = "Evert"
	if(true){
		let nom = "Diaz"
		//Si se declarara a ambos con var y let en el mismo bloque daría error
		//Ya que ambs funcionan igual cuando se usan en un mismo scope, sería como
		//Sobre declaracion, es decir, error
		console.log('Nombre Temporal en bloque: ' + nom)
	}
	console.log('Nombre Real fuera de bloque: '+nom)
}
*/

/*C31: Clases en ES6
class Tutor{
	constructor(nombre, apellido){
		this.nombre = nombre
		this.apellido = apellido
	}
	full_name(){
		return this.nombre + this.apellido
	}
}
var tutor = new Tutor("Evert", "Diaz")
var saludo = `Hola ${tutor.nombre} ${tutor.apellido}`
console.log(saludo)
console.log(tutor.full_name())
*/

/*C30: Arrow Functions
function tutor_antes(){
	this.nombre = "Evert"
	var self = this
	setTimeout(function(){
		console.log(self)
		self.nombre = "Diaz"}
		, 200)
}
function tutor(){
	this.nombre = "Evert"
	
	setTimeout(() => {
		this.nombre = "Diaz"}
		, 200)
}
var Tutor = new tutor()
console.log(Tutor.nombre)
setTimeout(function(){
	console.log(Tutor.nombre)
	}, 5000)

var numeros = [1,2,3,4,5]
var elevado = numeros.map(function(n){return n*n})
var elevado = numeros.map( n => n*n)
console.log(elevado)
*/

/*C29: Template Strings
function tagged(cadenas, valores){
	console.log(cadenas)
	console.log(valores)
}

tagged`Hola
 ${"Evert "+ "Diaz"} , Buenos días`


function nombre(){
	return 2+3
}



var saludo = `Hola ${nombre()} Buen Día`
console.log(saludo)

var template = `Hola 
	Mundo
	Mundillooooo`
console.log(template)
*/