const db = require('../util/db');

module.exports = class Product {
  constructor(rollno, firstName, lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  save() {
    return db.execute(
      'INSERT INTO students (rollno, firstName, lastName) VALUES (?, ?, ?)',
      [this.rollno, this.firstName, this.lastName]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM students');
  }
};