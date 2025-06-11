const products = require("./products"); 

function findProductByName(productName) {
    for (let product of products) {
        if (product.name === productName) {
            return product;
        }
    }
    return null;
}




console.log(findProductByName('Laptop'))
console.log(findProductByName('T-Shirt'))
console.log(findProductByName('Coffee Maker'))
console.log(findProductByName('Book'))