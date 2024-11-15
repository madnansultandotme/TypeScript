interface User{
    name:string;
    age:number;
}
function greet(user: User): string{
return `Hello, ${user.name}! You are ${user.age} years old.`;
}
const user: User={
    name:"Adnan",
    age:25

};
console.log(greet(user))
// const inCompleteUser: User={
//     name:"Bilal",
// };
// console.log(greet(inCompleteUser));