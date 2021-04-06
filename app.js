const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('RM 339125 RM 337694 RM 337998 RM 337954')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
