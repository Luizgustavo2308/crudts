interface Products {
    name: string;
    price: number;
}

let products: Array<Products> = [

];

function listProducts() {
    console.log(products);

}

function saveProducts(nome: string, preco: number) {
    let produtoObj: Products = {
        name: nome,
        price: preco
    };

    products.push(produtoObj);
}

function editProduct(nameField: string, name: string, price: number) {
    let position = products.findIndex(p => p.name === nameField);
    let novoProduct: Products = { name, price };
    products[position] = novoProduct;
}

function deleteProduct(nameField: string) {
    let position = products.findIndex(p => p.name === nameField);
    products.splice(position, 1);
}

saveProducts('jogos vorazes', 344);
saveProducts('Harry potter', 163);
saveProducts('sombra e ossos', 55);
saveProducts('Irmãos grimm', 1234);
saveProducts('Alice no país das maravilhas', 1234);

console.log(products);

deleteProduct('irmãos grimm')

console.log(products);