const hedgehogs = require("./hedgehogs.json")

module.exports = {
getHH(req,res,next) {
    res.status(200).send(hedgehogs)
},
createHH(req,res,next) {
    hedgehogs.push(req.body)
    res.status(200).send(hedgehogs)
},
sellHH(req,res,next) {
   const {name} = req.params
    const foundname = hedgehogs.filter(el=> (
        el.name.toLowerCase() === name.toLowerCase()
    ))
        for (let i = 0; i < hedgehogs.length; i++) {
            if(hedgehogs[i].name === foundname[0].name) {
                hedgehogs.splice(i,1)
            }
        }
    res.status(200).send(hedgehogs)
},
updateHH(req,res,next) {
    const {name} = req.params
    const {body} = req
    console.log(req.body)

    const foundname = hedgehogs.filter(el=> (
        el.name.toLowerCase() === name.toLowerCase()
    ))
        for (let i = 0; i < hedgehogs.length; i++) {
            if(hedgehogs[i].name === foundname[0].name) {
                hedgehogs[i] = body
            }
        }
        res.status(200).send(hedgehogs)
    }

}