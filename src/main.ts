// Неконсистентное форматирование TypeScript

interface User {
  name:string;
  age: number;
  isAdmin:boolean;
}

function greetUser(user:User) {
  if (user.isAdmin) {
      console.log(`Hello, ${user.name}!`);
  }else{
      console.log(`Welcome, ${user.name}!`);
  }
}

const user:User ={
name:'Alice',age:30, isAdmin:true};

greetUser(user);
