import React, {Component} from "react"
import AddHH from "./AddHH"
import IndividualHH from "./IndividualHH"
import SearchHH from "./SearchHH"
import axios from "axios";

export default class Hedgehogs extends Component {
    constructor() {
        super()
        this.state = {
            hhArray: []
        }
        this.sellHH = this.sellHH.bind(this)
        this.updateHH = this.updateHH.bind(this)
        this.createHH = this.createHH.bind(this)
    }
componentDidMount(){
    axios.get("./api/hedgehogs").then(res=> {
        this.setState({
            hhArray: res.data
        })
    })
}

sellHH(name){
    axios.delete(`/api/hedgehogs/${name}`)
    .then(res=> {
        this.setState({hhArray: res.data})
    })
}

updateHH(body, name) {
    axios.put(`/api/hedgehogs/${name}`, body)
    .then(res=> {this.setState({hhArray: res.data})})
}

createHH(body) {
    axios.post("./api/hedgehogs", body).then(res => {
        this.setState({hhArray: res.data})
    })
}

    render() {
        return(
            <div>
                <main>
                    <div className= "editbar"   > <AddHH createHH = {this.createHH}/> </div>
                    <div className="hedgehogDisplay"> 
                        <IndividualHH
                hhArray= {this.state.hhArray}
                sellHH= {this.sellHH}
                updateHH= {this.updateHH}/> 
                    </div>
                
                </main>
            </div>
        )
    }
}