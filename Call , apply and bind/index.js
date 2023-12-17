// console.log("deepak verma");

let firstName = {
  firstname: "Deepak",
  lastname: "Verma",

};

let fullName =  function (hometown , state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
  }

let secondName = {
    firstname:"Tushar",
    lastname:"Sharma",

}

let thirdName = {
    firstname:"Animesh",
    lastname:"Dubey",

}

console.log("call concept👇");

fullName.call(firstName,"faridabad","Haryana");
fullName.call(secondName,"GB Nagar","Uttar Pradesh");
fullName.call(thirdName,"ITO","Delhi");

console.log("apply concept👇");
fullName.apply(firstName,["faridabad","Haryana"]);
fullName.apply(secondName,["faridabad","Haryana"]);
fullName.apply(thirdName,["faridabad","Haryana"]);



console.log("bind concept👇");
let printFirstName = fullName.bind(firstName,"faridabad","Haryana");
// console.log(printFirstName);
printFirstName();
