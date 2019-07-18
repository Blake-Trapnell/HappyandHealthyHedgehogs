const express = require('express')
const app = express()
const PORT = 9001
app.use(express.json())

app.listen(PORT, ()=> console.log(`its Port ${PORT}, Bitch`))