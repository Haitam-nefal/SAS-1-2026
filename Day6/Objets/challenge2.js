const { use } = require("react");

const user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
}


console.log(`User Name  : ${user.username}`);
console.log(`Age : ${use.age}`);
user.age = 30;
user.ville = "Beni Mellal";
user.status = "eleve";
user.email = `${user.username}@gmail.com`;
console.log(
    `UserName : ${user.username}, Age : ${user.age}, City : ${user.city}, Status : ${user.status}, Email : ${user.email}`
);



