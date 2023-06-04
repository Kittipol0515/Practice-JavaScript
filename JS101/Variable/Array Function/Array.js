// let number1 = 1
// let number2 = 2
// let number3 = 3
// let number4 = 4
// let number5 = 5
// let number6 = 6

// let number = [0,1,2,3,4,5,6]
let color = ['red','blue','green','yellow','white','black']
color.push("vine")
color.push("gold")
// color.pop()
// color.unshift("Loppy") 
color.splice(1,3)

console.log(color)

// console.log(color.toString())
// let x = color.join("*")
// console.log(x)

// console.log(color)
// // find index item by for each color
// color.forEach(myData)

// function myData(item) {
//     console.log("Number of color =",item)
// }


// console.log(color)
// color[1] = "whitesmoke"
// console.log(color[1]) // Find Index
// console.log(color.length)// Find length

// let result = color.sort() // line in array
// console.log(result)

// console.log(color[0])

// console.log(color[color.length-1])

// index = 0 i<9;i++

// find index item by for loop
// for(let i = 0; i < color.length; i++) {
//     console.log("Number code =",(i+1), color[i])
// }


// const newArr = [100,200,300]
// const data = [10,20,...newArr]

// const newNumber = [1000,3000]

// data.push(...newNumber)


// console.log(data.length)
// console.log(data)


// const array1 = ["jui","yui","liop" ]
// const array = [1,2,3,4,5,]

// array.push(...array1)
// console.log(array)

//Destucturing // array

// const colors = ["green","blue","yellow","red"]
// const [yellow] = colors

// console.log(yellow) 


const data = [10, 20, 30, 40, 50];

// Ex1
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > 30) {
//         break;
//     }
//     console.log(`Number ${i} = ${data[i]}`);
// }


let sum = 0;
data.forEach(element => {
    sum += element;
    console.log(`Total = ${sum}`);
});

console.log("Sum:", sum);

// for (const element of data) {
//     if (element >= 30) {
//         break;
//     }
//     console.log(element);
// }