const DbR = require("./Model/DbR")

const db = new DbR('users', 'root', '123', {
    host: 'localhost',
    dialect:'mysql'
  });
  db.ok();
