const buy = document.getElementById("buy");

//TOTAL
let Total= localStorage.getItem("total");
buy.innerHTML = `Pagar $${Total}`
console.log(buy)




