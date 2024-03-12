
// # Завдання 3

// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

const getAgeMessage = function(user) {
    const { name, age } = user;
    return `${name} is ${age} years old.`;
  };
  

  const user = { name: 'Alice', age: 30 };
  console.log(getAgeMessage(user));
  