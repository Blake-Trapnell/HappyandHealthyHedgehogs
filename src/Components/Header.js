import React, {Component} from "react"
import "./Header.css"
import Logo from "./Logo"

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
              <Logo/>
               <h1>Welcome to Happy and Healthy Hedgehogs </h1>
               <Logo/>
           </header>
        </div>
    )
}

}