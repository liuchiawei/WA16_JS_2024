// 関数型
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    };
}


// TODO: 関数型オブジェクトのインスタンス生成
const person = new Person("HAL太郎", 25)

// TODO: インスタンスでブラウザ表示
// name
document.getElementById('person-name').innerHTML = person.name

// age
document.getElementById('person-age').innerHTML = person.age

// greet()
document.getElementById('person-greet').innerHTML = person.greet()
