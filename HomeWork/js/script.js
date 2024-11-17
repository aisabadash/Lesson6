
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

"use strict";

class Abonent {
   firstName = "";
   lastName = "";
   phoneNumber = "";
   
   constructor(name, number) {
      this.name = name;
      this.number = number;
   }
   set name(newName) {
      const nameRow = newName.split(" ");
      this.firstName = nameRow[0];
      this.lastName = nameRow[1];
   }
   set number(newNumber) {
      this.phoneNumber = newNumber;
   }
   get info() {
      return ` First name : ${this.firstName}, last name : ${this.lastName}, phone number : ${this.phoneNumber}`;
   }
}

const phoneBook = [
   new Abonent("Anna Ivanova", "+380671111111"),
   new Abonent("Olga Smith", "+380672222222"),
   new Abonent("Nata Free", "+380673333333"),
];

if(phoneBook) {
   phoneBook.forEach((item) => {
      console.log(item.info);
   });
}


