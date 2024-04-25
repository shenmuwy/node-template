const result = require('../utils/request/result')
const exec = require('child_process')
const testController = {
  showTest: async function (req, res) {
    try {
      let version
      exec.exec('npm -v', (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        version = stdout
        res.json(result.success({version}))
      })
    } catch (error) {
      
    }
  }
}
module.exports = testController