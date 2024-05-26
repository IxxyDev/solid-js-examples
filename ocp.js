// BAD
//
class Treasure {}

class Coin extends Treasure {}

class Crystal extends Treasure {}
// appears after in development process
class Brilliant extends Treasure {}

class Inventory {
  #score;
  pick(treasure) {
    if (treasure instanceof Coin) {
      this.#score += 1;
    }
    if (treasure instanceof Coin) {
      this.#score += 10;
    }
    // need to make changes in Inventory class code
    if (treasure instanceof Brilliant) {
      this.#score += 20;
    }
  }
}

// Good
class Treasure {
  value = 0;
}

class Coin extends Treasure {
  value = 1;
}

class Crystal extends Treasure {
  value = 10;
}
// appears after in development process
class Brilliant extends Treasure {
  value = 20;
}

class Inventory {
  #score;
  pick(treasure) {
    this.#score = treasure.value;
  }
}
