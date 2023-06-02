// while loops 
let count = 1
while (count <= 4) {
    console.log("True Loop" + count)
    if(count == 4) {
        break;
    }
    count++;
}

// for loops 
for (let count = 10; count >= 1; count--) {
    console.log(count)
}

for (let i = 0; i <= 10; i++) {
    if (i == 10) continue; 
    console.log("number of loops" + i)
}
console.log("end of loop")