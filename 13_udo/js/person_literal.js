// オブジェクトリテラル
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    }
};

// TODO: オブジェクトリテラルで処理
// name
document.getElementById('person-name').innerHTML;

// age
document.getElementById('person-age').innerHTML;

// greet()
document.getElementById('person-greet').innerHTML;