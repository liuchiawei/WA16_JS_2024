// オブジェクトリテラル
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    }
};

// TODO: オブジェクトリテラルで処理
// name: propety
document.getElementById('person-name').innerHTML
    = person.name

// age: propety
document.getElementById('person-age').innerHTML
    = person.age

// greet() : method
document.getElementById('person-greet').innerHTML
    = person.greet()