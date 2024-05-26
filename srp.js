// BAD
class Character {
  #invenory = [];
  #health = 10;

  pickItem(item) {
    this.#invenory.push(item);
  }

  receiveDamage(damage) {
    this.#health -= damage;
  }

  saveCharacter() {
    localStorage.setItem("char", this);
  }

  loadCharacter() {
    ///....
  }
}

// GOOD
class GoodCharacter {
  #invenory = [];
  #health = 10;

  pickItem(item) {
    this.#invenory.push(item);
  }

  receiveDamage(damage) {
    this.#health -= damage;
  }
}

class DB {
  save(item) {
    localStorage.setItem("char", item);
  }

  load() {
    ///....
  }
}
