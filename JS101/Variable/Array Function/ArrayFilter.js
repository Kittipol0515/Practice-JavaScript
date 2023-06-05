// const data = [10,20,30,40]

// const result = data.filter((e) => {
//     return e>20
// })

// console.log(result)

const data = [
    {name: "Kitti", salary:25000,department: "developer"},
    {name: "Joey", salary:35000,department: "chef"},
    {name: "Kate", salary:50000,department: "gamer"},
    {name: "loppy", salary:10000,department: "streamer"},
    {name: "ruk", salary:8000,department: "waiter"},
]

const total = data.filter((e) => {
    return e.salary > 10000,
    e.department === "developer"
})

console.log(total) 