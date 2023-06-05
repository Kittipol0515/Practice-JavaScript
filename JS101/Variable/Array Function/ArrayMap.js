const numbers = [10,20,30,40,50,60]

const result = numbers.map(e => {
    const a = e*2
    return a
})

console.log(result)

const weathers = ["summer","winter","autumn","spring","rain"]

const answer = weathers.map((e,i) => {
    return `Date ${i},Today weather ${e}`
})

console.log(answer)