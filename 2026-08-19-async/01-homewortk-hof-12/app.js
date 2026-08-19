const pizzas = []

const random = (max) => {
    return Math.floor(Math.random() * max) + 1
}

for (let i = 0; i < 20; i++) {
    pizzas.push({
        diameter: random(20),
        slices: random(8),
        toppings: random(6),
        price: random(100)
    })
}

console.log(pizzas)

const expensive = pizzas.reduce(
    (mostExpensive, pizza) => mostExpensive.price > pizza.price ? mostExpensive : pizza,
    { price: 0 }
)

console.log(expensive)
