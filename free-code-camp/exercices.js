"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewPizza = addNewPizza;
var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
var placeOrder = function (pizzaName) {
    var pizzaSelected = menu.find(function (item) { return item.name === pizzaName; });
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
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    order.status = "completed";
    return order;
}
