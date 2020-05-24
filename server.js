const express = require('express')
const app = express()
const port = 3000

var list = [];

app.get('/', (req, res) => {
    res.send({entries:["Hallo!", "Was geht bei euch?", "nix, bei euch?"]})
})

app.get('/entries', (req, res) => {
    res.send({entries:["Hallo!", "Was geht bei euch?", "nix, bei euch?"]})
})

app.post('/test', (req, res) => {
    list.push("test")
    console.log(list)
    res.send("ok")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
