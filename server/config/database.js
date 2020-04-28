
let db = process.env.NODE_ENV !== 'production' ? 
  {
    username: 'root',
    password: 'root',
    database: 'sagt-homebrew',
    host: '127.0.0.1',
    dialect: 'mysql',
  }
: {
    username: 'root',
    password: 'root',
    database: 'sagt-homebrew',
    host: '127.0.0.1',
    dialect: 'mysql'
  }

  module.exports = db;