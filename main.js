function greet(user) {
    return "Hello, ".concat(user.name, "! You are ").concat(user.age, " years old.");
}
var user = {
    name: "Adnan",
    age: 25
};
console.log(greet(user));
// const inCompleteUser: User={
//     name:"Bilal",
// };
// console.log(greet(inCompleteUser));
