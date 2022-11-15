// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Blusa lino',
        precio: 4000,
        imagen: '../imagenes/blusa colorida.jpeg'
    },
    {
        id: 2,
        nombre: 'Blusa estampada fibrana',
        precio: 5000,
        imagen: './imagenes/blusa estampada.jpeg'
    },
    {
        id: 3,
        nombre: 'Blusa estampada lino',
        precio: 4500,
        imagen: './imagenes/blusa estampada1.jpeg'
    },
    {
        id: 4,
        nombre: 'Blusa de lino acebrada',
        precio: 4500,
        imagen: './imagenes/mina posando2.jpeg'
    },
    {
      id: 5,
      nombre: 'Blusa lino c/boton',
      precio: 6000,
      imagen: './imagenes/camisa colorida.jpeg'
    },
    {
      id: 6,
      nombre: 'Blusa fibrana estampada',
      precio: 3500,
      imagen: './imagenes/blusa fibrana.jpeg'
    },
    
  ];
  
  let carrito = [];
  const peso = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
//const DOMbotonPagar = document.querySelector('#boton-pagar');
  
  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div'); //Div padre
        miNodo.classList.add('card', 'col-sm-3');
        // Body
        const miNodoCardBody = document.createElement('div'); //Div hijo
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5'); //Nombre de la prenda
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');//Foto prenda
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${peso}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button'); //Boton de comprar
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Comprar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', ProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
  }
  
 
  //añadir un producto al carrito
  function ProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito(); // Actualizamos el carrito 
  
  }
  
  
  // Muestra todos los productos guardados en el carrito
  
  function renderizarCarrito() {
    // Vacio todo el html
    DOMcarrito.textContent = '';
    // Quito los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Genero los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuento el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creo el nodo del item del carrito
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
  
  
  //borrar un elemento del carrito
  function borrarItemCarrito(evento) {
    // Obtenemos el producto 
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
  }
  
  
  // Calcula el precio total teniendo en cuenta los productos repetidos
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
