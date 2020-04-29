
let db = process.env.NODE_ENV !== 'production' ? 
  {
    username: 'softdsc2_sagt',
    password: '[]1Q2w3e4r',
    database: 'sagt-homebrew',
    host: 'hserv16.homehost.com.br',
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