let lista = ["pasta", "riso", "frutta", "verdure", "carne", "pesce"]
// console.log(lista)

for (let i = 0; i < lista.length; i++) {
    console.log("for " + lista[i])
}

const ul = document.getElementById("listaspesa");

let z = 0;
while (z < lista.length) {
    ul.innerHTML += `<li>${lista[z]}</li>`;
    console.log("while " + lista[z]);
    z++;
}
