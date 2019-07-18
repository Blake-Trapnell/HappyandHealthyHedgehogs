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
    }
componentDidMount(){
    axios.get("./api/hedgehogs").then(res=> {
        this.setState({
            hhArray: res.data
        })
    })
}
    render() {
        return(
            <div>
                <h2>Hedgehogs</h2>
                <AddHH/>
                <IndividualHH
                hhArray= {this.state.hhArray}/>
                <SearchHH/>

            </div>
        )
    }
}