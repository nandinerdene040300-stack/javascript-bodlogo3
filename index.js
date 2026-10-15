// const student = {
//     firstname: "Bat",
//     age: "15",
//     isStudent: "true"
// };
// console.log(student);

// const fruits = ["Алим", "Банана", "Жүрж"];
// console.log(fruits);

// const person = {firstname: "Ану", age: 20};
// console.log(person.firstname);

// const colors = ["Улаан", "Ногоон", "Цэнхэр"];
// console.log(colors[0]);

// const product = {name: "Дэвтэр", price: 2500 };
// console.log(product["price"]);

// const students = ["Бат", "Ану", "Болд"];
// console.log(students[1]);

// const person = {name: "Бат", age: 18};
// console.log("Бат 18 настай.");

// const animals = ["Нохой", "Муур", "Туулай", "Морь"];
// console.log(animals.length);

// const num = [10, 20, 30, 40, 50];
// console.log(num[num.length - 1]);

// const student = { name: "Сараа", age: 16, grade: 10 };
// student.grade = 10;
// console.log(student.grade);

// const fruits = ["Алим", "Банана", "Жүрж"];
// fruits[1] = "Усан үзэм";
// console.log(fruits);

// const person = { name: "Болд", age: 17 };
// person.isAdult = person.age >= 18;
// console.log(person);

// const books = ["Математик", "Англи хэл"];
// books.push("Программчлал");
// console.log(books);

// const student = { name: "Ану", age: 15 };
// student.grade = 9;
// console.log(student);

// const player = { name: "Тэмүүлэн", score: 100 };
// if (player.score >= 100){
//     player.score += 50
// } else {
//     player.score += 10
// }
// console.log(player.score);

// const items = ["Дэвтэр", "Бал", "Баллуур"];
// const removedItem = items.pop();
// console.log(items);
// console.log(removedItem);

// const queue = ["Бат", "Ану"];
// queue.unshift("Болд");
// console.log(queue);

// const lamp = {isOn: false};
// if (lamp.isOn) {
//     isOn ="false",
//     console.log("Гэрлийг унтраалаа");

// } else {
//     isOn ="true",
//     console.log("Гэрлийг асаалаа");
// }

// const queue = ["Болд", "Бат", "Ану"];
// const firstPerson = queue.shift();
// console.log(queue);
// console.log(firstPerson);

// const user = { name: "Бат", isVerified: true, temporaryCode: "ABC123" };
// if (user.isVerified) {
//     delete user.temporaryCode;

// } else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");

// }
// console.log(user);

// const product = { name: "Дэвтэр", price: 2500, quantity: 4 };
// const totalPrice = product.price * product.quantity;
// console.log(totalPrice);

// const rectangle = { width: 5, height: 8 };
// rectangle.area = rectangle.width * rectangle.height;
// console.log(rectangle);

// const scores = { math: 80, english: 90, programming: 100 };
// const { math, english, programming } = scores;
// console.log((math + english + programming)/3);

// const product = { price: 50000, discountPercent: 20 };
// if (product.discountPercent >0){
//     product.finalPrice = product.price - (product.discountPercent * product.price/100);

// } else {
//     product.price = product.finalPrice
// }
// console.log(product.finalPrice);

// const account = { owner: "Болд", balance: 70000 };
// const withdrawAmount = 60000;
// if (account.balance >= withdrawAmount) {
//     account.balance -= withdrawAmount;
//     console.log("Гүйлгээ амжилттай");

// } else {
//     console.log("Үлдэгдэл хүрэлцэхгүй");

// }
// console.log(account.balance);

// const product = { name: "Бал", stock: 0 };
// const text = product.stock > 0 ? "Бэлэн байна" : "Дууссан";
// console.log(text);

// const num = [15, 25, 10];
// console.log(num[0] + num[1] + num[2]);

// const scores = [80, 90, 100];
// console.log((scores[0]+scores[1]+scores[2])/3);

// const customer = { money: 10000 };
// const product = { price: 8000, stock: 3 };
// if (customer.money >= product.price && product.stock > 0){
//     console.log("Авч болно");

// } else {
//     console.log("Авч болохгүй");

// }

// const student = { name: "Сараа", score: 85 };
// if (student.score >= 90) {
//     console.log("Маш сайн");

// } else if (student.score >= 60) {
//     console.log("Тэнцсэн");

// } else {
//     console.log("Тэнцээгүй");

// }

// const student = { name: "Бат", age: 16 };
// console.log("age" in student);
// console.log("email" in student);

// const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } };
// console.log(student.address.city);

// const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } };
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);

// } else {
//     console.log("Орон нутгийн оршин суугч");

// }

// const student = { name: "Бат", scores: { math: 70, english: 80 } };
// if (student.scores.math < 80) {
//     console.log(student.scores.math +=10);

// } else {
//     console.log("Нэмэлт оноо шаардлагагүй");

// }

// const names = ["Бат", "Ану"];
// [names[0], names[1]] = [names[1], names[0]];
// console.log(names);

// const fruits = ["Алим", "Банана", "Жүрж"];
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");
    
// } else {
//     console.log("Банана алга");
    
// }

// const students = ["Бат", "Ану", "Болд", "Сараа"];
// console.log(students.indexOf("Болд"));

// const order = { product: { price: 5000, quantity: 3 }, delivery: { fee: 2500 } };
// const totalPrice = order.product.price * order.product.quantity;
// if (totalPrice >= 20000) {
//    order.delivery.fee = 0;
    
// }
// order.total = totalPrice + order.delivery.fee;
// console.log(order.total);

// const user1 = { name: "Болд", age: 20 };
// const user2 = { email: "bold@example.com", city: "Улаанбаатар" };
// const user = Object.assign(user1, user2);
// console.log(user);

// const cart =[];
// if (cart.length === 0) {
//     console.log("Сагс хоосон");
    
// } else {
//     console.log("Сагсанд бараа байна");
    
// }

// const numbers = [35, 20];
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
    
// } else if (numbers[1] > numbers[0]) {
//     console.log(numbers[1]);
    
// } else {
//     console.log("Хоёр тоо тэнцүү");
    
// }

// const students = ["Бат", "Ану"];
// const newStudent = "Сараа";
// if (!students.includes(newStudent)) {
//     students.push(newStudent);
// } else {
//     console.log("Энэ нэр бүртгэлтэй байна");
    
// }
// console.log(students);

// const user1 = { name: "Ану", age: 18 };
// const user2 = { email: "anu@example.com", city: "Улаанбаатар" };
// const user = {... user1, ...user2 };
// console.log(user);

// const groupA = ["Бат", "Ану"];
// const groupB = ["Болд", "Сараа"];
// const allStudents = groupA.concat(groupB);
// console.log(allStudents);

// const original = [10, 20, 30];
// const copied = [...original];
// copied[0] =99;
// console.log(original);
// console.log(copied);

// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.slice(1, 4);
// console.log(result);

// const user = { name: "Сараа", age: 22, email: "saraa@example.com" };
// const profile = {name: "profile.name", age: "user.name" };
// profile.name = "Бат"
// console.log(profile.name);
// console.log(user.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"];
// colors.splice(1, 1);
// console.log(colors);

// const days = ["Даваа", "Лхагва"];
// days.splice(1, 0, "Мягмар");
// console.log(days);

// const words = ["Би", "JavaScript", "сурч", "байна."];
// const sentence = words.join(" ");
// console.log(sentence);

// const students = [{ name: "Бат", score: 75 },{ name: "Ану", score: 90 }];
// students[0].score += 10;
// if (students[1].score >= 90) {
//     console.log("Ану маш сайн");
    
// } else {
//     console.log("Ану хичээгээрэй");
    
// }
// console.log(students[0].score);












