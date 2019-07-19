const express = require('express')
const app = express()
const PORT = 9001
app.use(express.json())
const hhCtrl = require("./hhCtrl")

app.use(express.json())

app.get("/api/hedgehogs/search", hhCtrl.searchHH)
app.get("/api/hedgehogs", hhCtrl.getHH)

app.post('/api/hedgehogs', hhCtrl.createHH)

app.delete("/api/hedgehogs/:name", hhCtrl.sellHH)

app.put("/api/hedgehogs/:name", hhCtrl.updateHH)


app.listen(PORT, ()=> console.log(`AAAAAARGGH HIS POWER LEVEL IS OVER ${PORT}`))