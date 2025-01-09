const menu: Pizza[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;
let orderHistory: Order[] = [];

export function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

export function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

    if (!selectedPizza) {
        return `${pizzaName} pizza does not exist in the menu`;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderHistory.push(newOrder);
    return newOrder;
}

export function completeOrder(orderId: number) {
    const order = orderHistory.find(order => order.id === orderId)

    if (!order) {
        return `Order with id ${orderId} not found`;
    }
    order.status = "completed"
    return order
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

export function emptyOrderQueue() {
    orderHistory = []
    nextOrderId = 1
}

type Order = {
    id: number;
    pizza: Pizza;
    status: "completed" | "ordered";
};

type Pizza = {
    name: string;
    price: number;
};
