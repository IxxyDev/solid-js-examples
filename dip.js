// BAD
class DB {
  save(items) {
    console.log("Saved: " + items);
  }
}

// Occured, that we need another DB
class MongoDB extends DB {
  //...
}

class TodoList {
  items = [1, 2, 3];
  db = new DB();
  // need to create new MondoDB instance
  mongodb = new MongoDB();

  saveToDb() {
    this.db.save(this.items);
    this.mongodb.save(this.items);
  }
}

// GOOD
class TodoList {
  items = [1, 2, 3];
  db;

  constructor(db) {
    this.db = db;
  }

  saveToDb() {
    this.db.save(this.items);
  }
}
