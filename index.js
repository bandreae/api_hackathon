const express = require('express')
const app = express()
const employees = require("./routes/employees")
const database = require("./mysql/connection")

const port = process.env.PORT || 4001;

app.use(employees)
app.get(database)

app.get('/', (req, res) => {
  // aControllerFile.js
  database.execute('SELECT * FROM employees', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return res.status(500).send('An unexpected error occurred')
    }
    res.json(rows)
  });
  // res.send('Welcome to our API')
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});