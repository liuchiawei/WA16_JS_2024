// 関数型
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    };
}


// TODO: 関数型オブジェクトのインスタンス生成

// TODO: インスタンスでブラウザ表示
// name
document.getElementById('person-name').innerHTML;

// age
document.getElementById('person-age').innerHTML;

// greet()
document.getElementById('person-greet').innerHTML;
