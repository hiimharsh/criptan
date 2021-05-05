const products = [
    { number: 1, price: 100, name: "Orange juice" },
    { number: 2, price: 200, name: "Soda" },
    { number: 3, price: 150, name: "Chocolate snack" },
    { number: 4, price: 250, name: "Cookies" },
    { number: 5, price: 180, name: "Gummy bears" },
    { number: 6, price: 500, name: "Condoms" },
    { number: 7, price: 120, name: "Crackers" },
    { number: 8, price: 220, name: "Potato chips" },
    { number: 9, price: 80,  name: "Small snack" }
];

const vendingMachine = (products, amount, productNumber) => {
    if (products && products.length) {
        let selectedProduct = products.filter(product => product.number === productNumber);
        if (selectedProduct && selectedProduct.length) {
            let product = selectedProduct[0];
            if (amount > product.price) {
                let change = amount - product.price;
                return {
                    product: product.name,
                    change: checkAmount(change)
                }
            } else {
                console.log(`${product.name} product costs more than you inserted in vending machine`);
                return;
            }
        } else {
            console.log(`There is no product avialable with ${productNumber} product number`);
            return;
        }
    } else {
        console.log(`There are no products avialable`);
        return;
    }
};

const amountArray = [];
const checkAmount = (amount) => {
    if (amount >= 500) { amountArray.push(500); amount = amount - 500; }
    else if (amount >= 200) { amountArray.push(200); amount = amount - 200; }
    else if (amount >= 100) { amountArray.push(100); amount = amount - 100; }
    else if (amount >= 50) { amountArray.push(50); amount = amount - 50; }
    else if (amount >= 20) { amountArray.push(20); amount = amount - 20; }
    else if (amount >= 10) { amountArray.push(10); amount = amount - 10; }

    if (amount > 0) { checkAmount (amount); }
    return amountArray;
}

const product = vendingMachine(products, 520, 7);
console.log(product);