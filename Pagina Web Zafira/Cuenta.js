const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const boton = document.querySelector("nombre");


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
//CAMBIAR DE LADO DE PANTALLA
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//GUARDAR NOMBRE
const nombre= document.querySelector(".name").value;
boton.addEventListener("click", () => {
    e.preventDefault();
    localStorage.setItem("nombre", nombre);
})

const promesa = new Promise((resolve, reject)=> {
    const num = Math.floor(Math.random());  //Math.floor es para un numero(Math) aleatorio(random) entero(floor)
    setTimeout(()=>{num > 3 ? resolve(num) : reject(num)
    }, 3000) 
})
 console.log(promesa) 


 const obtenerDatos1 = ()=> {
    fetch("./texto.txt")  //aca quiero que aparezca un cartel/aviso que se inició sesion pero no se porque no funciona
        .then(response => response.text())
        .then(result => contenedor.innerHTML = result)
        .catch(error => console.log(error))
} 

 boton.onclick = ()=> {
    obtenerDatos1()
}
