// TODO: クラス型定義
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `I'm ${this.name}. ${this.age} years old.`;
    }
}

// TODO: クラス型オブジェクトのインスタンス生成

// TODO: インスタンスでブラウザ表示
// name
document.getElementById('person-name').innerHTML;

// age
document.getElementById('person-age').innerHTML;

// greet()
document.getElementById('person-greet').innerHTML;
