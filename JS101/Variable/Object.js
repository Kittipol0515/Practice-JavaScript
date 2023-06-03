// const username = "Kittipol"
// const age = 25
// const game = "switch"



// const customer = {
//   customerName: username,
//   age : age,
//   Gamepad: game,
//   showData() {
//     console.log(array)
//   }
// }
// customer.showData()
// console.log(customer.Gamepad)


//rest parameter

summation = (...numberArray) => {
  let total = 0
  for(let number of numberArray) total += number
  return total
};

console.log(summation(10,20))

summation1 = (...numbers) => {
  let result = 0
  for(let number of numbers) result += number
  return result
}
console.log(summation1(1000,3000))



// Destructuring 
const product = {
  productName : "PC gaming",
  price: 30000,
  stock: 10
}
// const productName = product.productName

const {productName,price} = product

console.log(productName)
console.log(price)