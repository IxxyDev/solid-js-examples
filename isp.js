// BAD
class Weapon {
  strike() {}
  shoot() {}
}

class Rifle extends Weapon {
  strike() {
    // Not effective
  }

  shoot() {}
}

class Sword extends Weapon {
  strike() {}

  // does not need shoot() method
  shoot() {}
}

// GOOD
class Weapon {
  // only stuff, that EVERY weapon would use
  cost;
}

class Rifle extends Weapon {
  shoot() {}
}

class Sword extends Weapon {
  strike() {}
}
