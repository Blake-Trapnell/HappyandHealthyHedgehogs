import React, {Component} from "react"
import "./Header.css"
import Logo from "./Logo"
import axios from "axios"

export default class Footer extends Component {
constructor() {
    super() 
    this.state = {
        sprite: "",
        name: "",
        clicked: false,
        pokedex: 0,
        guessed: "",
    }
}
getSprite() {
    let id = Math.ceil(Math.random()*802)
    console.log(id)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=> ( 
        this.setState({
        pokedex: id,
        sprite: res.data.sprites.front_shiny,
        name: res.data.name,
        clicked: true})))
}
changeGuessed(e) {
    this.setState({
        guessed: e
    })
}

guessThatPokemon() {
    console.log("is this working")
    if (this.state.guessed.toLowerCase() === this.state.name.toLowerCase()) {
        alert(`Correct! Pokedex Number: ${this.state.pokedex}`)
    }
    else {
        alert(`not quite! the correct name is ${this.state.name}. Pokedex Number: ${this.state.pokedex}`)
    }
}

render() {
    const {resetHH} = this.props
    return(
           <footer>
              {this.state.clicked ? (
                  <div className="bottom">
                  <img className="pokemon" src={this.state.sprite} alt=""/>
                  <input type="text" placeholder="Pokemon name" onChange={(e)=> this.changeGuessed(e.target.value)}/>
                  <button onClick={()=>this.guessThatPokemon()}>guess that pokemon!</button>
                  <button onClick={()=>this.getSprite()}>New Pokemon!</button>
                  </div>
                  
              ) : (
                  <div className= "bottom">
                <Logo/>
              <button onClick={()=>this.getSprite()}>Click Me!</button>
               <h1>Thank you Sam, Matt, and Jonathan!</h1>
               <button onClick={()=>resetHH()}>Reset</button>
               <Logo/>
                  </div>
              ) 
              }
           </footer>
    )
}

}