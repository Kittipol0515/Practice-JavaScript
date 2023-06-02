function print() {
    console.log("hello world!");
}

print()

function plusNumber(x,y) {
    console.log(x+y)
}

plusNumber(10,20)

function fullName(fname,lname,city) {
    console.log(fname+" "+lname+ " "+city)
    
}

fullName("Kittipol","Nomain")

function summation(x,y) {
    let total = x + y;
    console.log("Answers: " + total)
}

summation(20,70)

function getComputedIP() {
    return "127.0.0.1"
}

let myIP = getComputedIP()
console.log("myIP: " + myIP)

function getNumber() {
    return 100*100
}

let total = getNumber()
console.log(total)


function getMyAddress() {
    let city = "Tokyo"
    return city
}

let location = getMyAddress()
console.log(getMyAddress())


function setSalary(salary) {
    let bonus = 1000
    return salary+bonus 
}
let salary = setSalary(15000)
salary = salary - 500;

console.log(salary)

const salaryA = setSalary(20000)
console.log("Salary" + ' ' + salaryA) 