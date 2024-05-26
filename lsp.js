class User {
  role = "user";

  getRole() {
    return this.role;
  }
}

class Admin extends User {
  role = ["user", "admin"];
}

function logRole(user) {
  console.log("Role: " + user.getRole().toUpperCase());
}

// Failed LSP, error would be shown
logRole(new User());
logRole(new Admin());

// Good
class Admin extends User {
  #role = ["user", "admin"];

  getRole() {
    return this.#role.join(", ");
  }
}

// Would work
logRole(new User());
logRole(new Admin());
