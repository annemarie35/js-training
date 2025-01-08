const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

const placeOrder = (pizzaName) => {
    const pizzaSelected = menu.find((item) => item.name === pizzaName);
    if (pizzaSelected) {
        cashInRegister += pizzaSelected.price;
        orderQueue.push({
            pizza: pizzaSelected,
            status: "ordered",
        });
    }
    return orderQueue;
};

function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    order.status = "completed";
    return order;
}
