// let myStatus = 1; 

// let light;
// if(myStatus == 0) {
//     light = false
// } else if(myStatus == 1) {
//     light = true
// } else {
//     light = "dont have info"
// }

// console.log(light)

let openStatus = 1;

switch(openStatus) {
    case 0 : light="close light";
    break;
    case 1 : light="open light";
    break;
}

console.log(light) 

// example

let myGrade = 70

switch (true) {
  case myGrade >= 80:
    console.log("Grade A: " + myGrade);
    break;
  case myGrade >= 70:
    console.log("Grade B: " + myGrade);
    break;
  case myGrade >= 60:
    console.log("Grade C: " + myGrade);
    break;
  case myGrade >= 50:
    console.log("Grade D: " + myGrade);
    break;
  default:
    console.log("Failure");
    break;
}

