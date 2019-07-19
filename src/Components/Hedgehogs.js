import React, {Component} from "react"
import AddHH from "./AddHH"
import IndividualHH from "./IndividualHH"
import SearchHH from "./SearchHH"
import axios from "axios";
import "./Hedgehogs.css"

export default class Hedgehogs extends Component {
    constructor() {
        super()
        this.state = {
            hhArray: []
        }
        this.sellHH = this.sellHH.bind(this)
        this.updateHH = this.updateHH.bind(this)
        this.createHH = this.createHH.bind(this)
        this.searchHH = this.searchHH.bind(this)
    }
componentDidMount(){
    axios.get("./api/hedgehogs").then(res=> {
        this.setState({
            hhArray: res.data
        })
    }).catch(function(error){console.log(error)})
}

sellHH(name){
    axios.delete(`/api/hedgehogs/${name}`)
    .then(res=> {
        this.setState({hhArray: res.data})
    }).catch(function(error){console.log(error)})
}

updateHH(name, body) {
// console.log(name, body)
    axios.put(`/api/hedgehogs/${name}`, body)
    .then(res=> {
        this.setState({hhArray: res.data})
    }).catch(function(error){console.log(error)})
}
searchHH(name) {
    axios.get(`/api/hedgehogs/search?name=${name}`)
    .then(res=> {
        this.setState({hhArray: res.data})
    }).catch(function(error){console.log(error)})
}

createHH(body) {
    axios.post("./api/hedgehogs", body).then(res => {
        this.setState({hhArray: res.data})
    }).catch(function(error){console.log(error)})
}

    render() {
        return(
            <div>
                <main>
                    <div className= "editbar"   > <AddHH createHH = {this.createHH} updateHH= {this.updateHH} searchHH= {this.searchHH}/> </div>
                    <div className="hedgehogDisplay"> 
                        <IndividualHH
                hhArray= {this.state.hhArray}
                sellHH= {this.sellHH}
                /> 
                    </div>
                
                </main>
            </div>
        )
    }
}