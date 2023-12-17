let fullName = {
  firstname: "Deepak",
  lastname: "Verma",
};

let printFullName = function (hometown,country) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown +" , "+country);
};

let fullNameStudent = printFullName.bind(fullName,"Faridabad");
fullNameStudent("India");

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0],[...params,...args2]);
  };
};

let fullNameStudent2 = printFullName.mybind(fullName,"Faridabad");
fullNameStudent2("India");
