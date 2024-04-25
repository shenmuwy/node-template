//用于生成和解析token
const jwt = require('jsonwebtoken');
const configs = require('../../configs')


class Token {
  constructor() {
    this.signkey = configs.server.signkey
  }

  setToken(username, userid) {
    return new Promise((resolve)=>{
      let token = jwt.sign({
        name:username,
        _id:userid
      },configs.server.signkey,{ expiresIn:'1h' })
      resolve(token);
    })
  }

  verToken(token) {
    return new Promise((resolve)=>{
      const info = jwt.verify(token.replace('Bearer ',''),this.signkey);
      resolve(info);
    })
  }
}

module.exports = new Token()