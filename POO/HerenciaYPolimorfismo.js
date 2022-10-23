// Herencia y Polimorfismo

class Person {
  _name = null;
  _age = null;
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  sayHello() {
    console.log(`Hola, mi nombre es ${this._name} y tengo ${this._age} años.`);
  }

  setName(newName) {
    this._name = newName;
  }

  getName() {
    return this._name;
  }

  setAge(newAge) {
    this._age = newAge;
  }

  getAge() {
    return this._age;
  }
}

class Developer extends Person {
  _language = null;
  constructor(name, age, language) {
    super(name, age);
    this._language = language;
  }

  sayHello() {
    console.log(
      `Mi nombre es ${this._name}, tengo ${this._age} años y mi lenguaje favorito es ${this._language}`
    );
  }

  setLanguage(newLanguage) {
    this._language = newLanguage;
  }

  getLanguage() {
    return this._language;
  }
}

const dev1 = new Developer("Juan", 23, "JavaScript");

dev1.sayHello();
