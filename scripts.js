let lista = ["pasta", "riso", "frutta", "verdure", "carne", "pesce"]
// console.log(lista)

for (let i = 0; i < lista.length; i++) {
    console.log("for " + lista[i])
}


// con inner.html

// const ul = document.getElementById("listaspesa");

// let z = 0;
// while (z < lista.length) {
//     ul.innerHTML += `<li>${lista[z]}</li>`;
//     console.log("while " + lista[z]);
//     z++;
// }



// con crete element
const ul = document.getElementById("listaspesa");

let z = 0;
while (z < lista.length) {
    let li = document.createElement('li')
    li.innerHTML = lista[z];
    ul.appendChild(li)
    console.log("while " + lista[z]);
    z++;
}
