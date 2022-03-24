const typed = new Typed('.typed', {
    
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


window.sr = ScrollReveal();
sr.reveal('.header', {
	duration: 1000,
	origin: 'bottom',
	distance:'-100px',
	reset:true
});


sr.reveal('.sobre-mi', {
	duration: 2000,
	origin: 'bottom',
	distance:'-50px',
	reset:true
});
sr.reveal('.proyectos', {
	duration: 2000,
	origin: 'bottom',
	distance:'-50px',
	reset:true
});


const navToggle = document.querySelector('.nav-toggle');
let click = 1;
navToggle.addEventListener('click',()=>{
if (click === 1 ){
	mostrarMenu();
	click++;
}else{
	ocultarMenu();
	click = 1;
}
});
function mostrarMenu(){
	document.querySelector('.nav-menu').style.right = '0';
	document.querySelector('.titulo-animado').style.visibility = 'hidden';
}
function ocultarMenu(){
	document.querySelector('.nav-menu').style.right = '100%';
	document.querySelector('.titulo-animado').style.visibility = 'initial';
}