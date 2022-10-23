class Person {
  // # => privada (dentro de la clase)
  #name;
  #age;
  // _ => protect (dentro de la clase y descendientes)
  _isDeveloper = true;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  sayHello() {
    console.log(`Hola, mi nombre es ${this.#name} 
    y tengo ${this.#age} años.`);
  }

  setName(newName) {
    this.#name = newName;
  }

  setAge(newAge) {
    this.#age = newAge;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

const persona = new Person("Andrés", 41);

persona.sayHello();

// Setter => métodos para cambiar un atributo
persona.setName("Diana");
persona.setAge(14);

// Getter => métodos para obtener un atributo
console.log(persona.getName());
console.log(persona.getAge());
