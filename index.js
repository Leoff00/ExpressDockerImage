const express = require('express');
const app = express()
const PORT = 3333


app.get('/', (req, res) => {
    res.send("Hello world in DOCKER!!!")
})


app.listen( PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})