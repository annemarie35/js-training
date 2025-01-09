let nextPizzaId: number = 1
let cashInRegister: number = 100;
let nextOrderId: number = 1;
let orderHistory: Order[] = [];
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];

export function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj);
}

export function placeOrder(pizzaName: string): Order | string {
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

export function completeOrder(orderId: number): Order | string {
    const order = orderHistory.find(order => order.id === orderId)

    if (!order) {
        return `Order with id ${orderId} not found`;
    }
    order.status = "completed"
    return order
}
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });

export function emptyOrderQueue(): void {
    orderHistory = []
    nextOrderId = 1
}

export function getPizzaDetail(identifier: number  | string): Pizza | string | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
        // identifier.toLowerCase() = error
        // pizza.name === identifier > error
        // Type narrowing => Ts parse and understand the code and knows that here identifier is a number
    } else {
        return `Pizza with identifier ${identifier} not found`
        //         throw new Error(`User with username ${username} not found`)
    }
}


type Order = {
    id: number;
    pizza: Pizza;
    status: "completed" | "ordered";
};

type Pizza = {
    id: number;
    name: string;
    price: number;
};
