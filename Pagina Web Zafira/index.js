//TOASTIFY
Toastify({
    text: "Bienvenidos a zafira" ,
    className: "info",
    // destination: "https://github.com/apvarun/toastify-js",
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

  // const promesa = new Promise ((_resolve, _reject)=> {
  //   let connection = true;

  //   if(connection) {
  //     resolve('Conexion establecida');
  //   } else {
  //     _reject('Conexion perdida')
  //   }

  //   setTimeout(() => {
  //     Toastify
  //   }, 3000); });  

  //   myPromise.then ((message) => {
  //     console.log(message);
  //   });
 
  console.log("Inicio")
  setTimeout(()=>{  //Para esperar que cargue una pagina por ejemplo 
      console.log("Fin")
  }, 5000) // (5 segundos) 
 //Asincronico
 