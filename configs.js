const configs = {
  mysql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'app_server'
  },
  server: {
    signkey: 'wangyi_shi_121_dashuaibi'
  },
  log: {
    error (message) {
      console.log('[knex error]', message);
    }
  }
}

module.exports = configs