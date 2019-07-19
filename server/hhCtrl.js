const hedgehogs = require("./hedgehogs.json")

module.exports = {
getHH(req,res,next) {
    res.status(200).send(hedgehogs)
},
createHH(req,res,next) {
    console.log(req.body)
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
                hedgehogs[i].name = body.name ||  hedgehogs[i].name
                hedgehogs[i].Image = body.Image ||  hedgehogs[i].Image
                hedgehogs[i].age = body.age ||  hedgehogs[i].age
                hedgehogs[i].friendliness = body.friendliness ||  hedgehogs[i].friendliness
                hedgehogs[i].breed = body.breed ||  hedgehogs[i].breed
                hedgehogs[i].gender = body.gender ||  hedgehogs[i].gender
                hedgehogs[i].color = body.color ||  hedgehogs[i].color
                hedgehogs[i].Info = body.Info ||  hedgehogs[i].Info
            }
        }
        res.status(200).send(hedgehogs)
    }

}