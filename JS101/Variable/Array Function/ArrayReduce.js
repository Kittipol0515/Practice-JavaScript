const data = [10,20,30,40,50,60,]

const summation = data.reduce((value,e) => {
    console.log(value)
    const total = e+value
    return total
},0)

console.log(summation)


const cart = [
    {name: "PS5", price: 18000},
    {name: "NSW", price: 12000},
    {name: "XBOX", price: 15000},
]

const newCart = cart.reduce((value,e) => {
    const total = e.price+value
    return total
},0)

console.log(newCart)