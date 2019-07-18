import React, { Component } from "react"

export default class addHH extends Component {
    constructor() {
        super() 
        this.state = {
            popularHHNames: ["Sonic ", "spike ", "Knuckles ", "Mr.Poopybutthole "]
            }
        }
    render() {
        return(
            <div>
                <h1>
                    {this.state.popularHHNames}
                    </h1>
            </div>
        )
    }
}