const express = require('express')
const app = express()
const port = 3000

var list = [];

app.use('/', express.static('public'))

app.get('/entries', (req, res) => {
    res.send({entries:["Hallo!", "Was geht bei euch?", "nix, bei euch?"]})
})

app.post('/entry', (req, res) => {
    list.push("test")
    console.log(list)
    res.send("ok")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
