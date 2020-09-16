// https://www.youtube.com/watch?v=ke_y6z0xRpk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=2

// ---------------- What is Pollyfill -----------------
// -> shotoff a browser fall back

console.log("Hello world!");

let name = {
  firstname: "Ashish",
  lastname: "singh",
};

let printName = function (hometown, state, country) {
  console.log(this.firstname, this.lastname, hometown, state);
};

let printMyname = printName.bind(name, "kanpur", "uttar pradesh");
printMyname("india");

Function.prototype.mybind = function (...args) {
  // here this will point to printName method
  let obj = this;
  params = args.slice(1); // reove first element from list and return other
  return function (...args2) {
    // apply takes array input as argument
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyname2 = printName.mybind(name, "kanpur", "uttar pradesh");
printMyname2("india");
