"use strict";
let products = [];
function listProducts() {
    console.log(products);
}
function saveProducts(nome, preco) {
    let produtoObj = {
        name: nome,
        price: preco
    };
    products.push(produtoObj);
}
function editProduct(nameField, name, price) {
    let position = products.findIndex(p => p.name === nameField);
    let novoProduct = { name, price };
    products[position] = novoProduct;
}
function deleteProduct(nameField) {
    let position = products.findIndex(p => p.name === nameField);
    products.splice(position, 1);
}
saveProducts('jogos vorazes', 344);
saveProducts('Harry potter', 163);
saveProducts('sombra e ossos', 55);
saveProducts('Irmãos grimm', 1234);
saveProducts('Alice no país das maravilhas', 1234);
console.log(products);
deleteProduct('irmãos grimm');
console.log(products);
