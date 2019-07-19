import React, {Component} from "react"
import "./Header.css"

export default class Header extends Component {
    constructor() {
        super()
        this.state  = {
            randomPic: []
        }
    }
render() {
    return(
        <div>
           <header>
               <h1>Welcome to Happy and Healthy Hedgehogs</h1>
           </header>
        </div>
    )
}

}