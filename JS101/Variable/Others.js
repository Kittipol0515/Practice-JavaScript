let a = 5
let b = 10


// add prefix
console.log(++a)
// add postfix
console.log(b++)
console.log(b)

// program even number

let x = 51;

if(x%2 == 0) {
    console.log("even number")
} else {
    console.log("odd number")
}


//Default parameter 

getDataCustomer = (customername,gamingpad) => {

    if(!customername || !gamingpad) {
        customername = "unknown"
        gamingpad = "unsigned"
    }

    const address = `Customer name : ${customername},
    Style : ${gamingpad}`
    return address
}

console.log(getDataCustomer("Nomain"))