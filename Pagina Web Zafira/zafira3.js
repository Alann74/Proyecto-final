// Variables
const baseDeDatos = [
    {
        id: 13,
        nombre: 'Remera modal lisa',
        precio: 3000,
        imagen: './imagenes/remera_1.jpg'
    },
    {
        id: 14,
        nombre: 'Remera Roma crepe lisa',
        precio: 3200,
        imagen: './imagenes/remera_2.jpg'
    },
    {
        id: 15,
        nombre: 'Remeron Heart',
        precio: 3500,
        imagen: './imagenes/remera.jpg'
    },
    {
        id: 16,
        nombre: 'Remera Paris crepe',
        precio: 4500,
        imagen: './imagenes/remera_4.jpg'
    },
    {
      id: 17,
      nombre: 'Remeron liso',
      precio: 6000,
      imagen: './imagenes/remera_5.jpg'
    },
    {
      id: 18,
      nombre: 'Remera Africa',
      precio: 5000,
      imagen: './imagenes/remera_6.jfif'
    },
    
  ];
  
  let carrito = [];
  const peso = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
//   const DOMbotonPagar = document.querySelector('#boton-pagar');
  
  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div'); //Creo el div de las cartas
        miNodo.classList.add('card', 'col-sm-3'); //Creo la clase de las cartas
        // Body
        const miNodoCardBody = document.createElement('div'); 
        miNodoCardBody.classList.add('card-body');
        const miNodoHr = document.createElement('br');  
        
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${peso}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Comprar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
  }
  
  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
  
  }
  
  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${peso}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
    Total = calcularTotal();
    localStorage.setItem("total", Total); //GUARDO EL TOTAL 
    JSON.parse(localStorage.getItem("total")); 
  }
  
//BORRAR ELEMENTOS CARRITO---------------------
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
  }
  
  /**
  * Calcula el precio total teniendo en cuenta los productos repetidos
  */
  function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
  }
  
  /**
  * Varia el carrito y vuelve a dibujarlo
  */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
  }
  
  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  
  // Inicio
  renderizarProductos();
  renderizarCarrito();
  
//TOASTIFY
Toastify({
    text: "Bienvenidos a zafira" ,
    className: "info",
    destination: "https://github.com/apvarun/toastify-js",
    duration: 3080,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    gravity: "bottom", 
    position: "right",
  }).showToast();

//SWEET ALERT
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'OK'
  })
