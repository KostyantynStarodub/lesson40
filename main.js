//функция
//процедура

// function name(params) {
//     инструкция
// }

// function SendMessage(){
//     alert(`Привет`)
// }
// SendMessage()

// let name = prompt(`Как тебя зовут?`)
// let age = +prompt(`Сколько тебе лет?`)
// Java()
// function Java(){
//     let name = `егор`
//     let age = 56
//     alert(`Привет, тебя зовут ${name}. И тебе ${age} лет.`)
// }
// alert(`Привет, тебя зовут ${name}. И тебе ${age} лет.`)

// function SendMessage(name, age){
//     let a = `Привет, тебя зовут ${name}. И тебе ${age} лет.`
//     alert(a)
// }
// let a = prompt(`Как тебя зовут?`)
// let b = +prompt(`Какой твой возраст?`)
// SendMessage(a, b)

//функция
// function name(params) {
//     инструкция
//     return результат
// }
// let a = name()
// alert(a)

// function SendMessage(name, age){
//     let message = `Привет, тебя зовут ${name}. И тебе ${age} лет.`
//     return message
// }
// let a = prompt(`Как тебя зовут?`)
// let b = +prompt(`Какой твой возраст?`)
// SendMessage(a, b)
// let result = SendMessage(a, b)
// alert(result)

//8.1
// function display_message(){
//     alert("Сегодня мы познакомились с понятием <<функция>>. Тема не очень сложная и все понятно")
// }
// display_message()

//8.2
// function favorite_book(title){
//     alert(`Моя любимая книга это ${title}`)
// }
// let book = prompt("Какая твоя любимая книга?")
// favorite_book(book)

//8.3
// function make_shirt(size, text){
//     alert(`Размер: ${size}, текст: ${text}`)
// }
// let text = prompt("Введите текст который вы хотите видеть на вашей футболке")
// let size = prompt("Введите размер вашей футболке")
// make_shirt(size, text)

//8.4
// function make_shirt(size, text){
//     alert(`Размер: ${size}, текст: ${text}`)
// }
// let size = "L"
// let text = "I love JS"
// make_shirt(size, text)
// let text2 = prompt("Введите текст который вы хотите видеть на вашей футболке")
// let size2 = prompt("Введите размер вашей футболке")
// make_shirt(size2, text2)

//8.5
function describe_city(city, country){
    alert(`${city} это город в ${country}`)
}
let city1 = prompt("Введите город")
let country1 = "Украина"
describe_city(city1, country1)
let city2 = prompt("Введите город")
let country2 = "Украина"
describe_city(city2, country2)
let city3 = prompt("Введите город")
let country3 = prompt("Введите страну")
describe_city(city3, country3)