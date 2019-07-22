import React, { Component } from "react"
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
            score: 0,
            correctGuess: [],
            incorrectGuess: [],
        }
    }
    getSprite() {
        let id = Math.ceil(Math.random() * 802)
        console.log(id)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => (
                this.setState({
                    pokedex: id,
                    sprite: res.data.sprites.front_shiny,
                    name: res.data.name,
                    clicked: true
                })))
    }
    changeGuessed(e) {
        this.setState({
            guessed: e
        })
    }

    guessThatPokemon() {
        if (this.state.guessed.toLowerCase() === this.state.name.toLowerCase()) {
            const newScore = this.state.score + 10
            const temp = this.state.correctGuess
            temp.push({ name: this.state.name, sprite: this.state.sprite })
            this.setState({
                score: newScore,
                correctGuess: temp
            })
            alert(`Right! It's ${this.state.name}! Pokedex Number: ${this.state.pokedex}`)
            this.getSprite()

        }
        else {
            alert(`not quite! the correct name is ${this.state.name}. Pokedex Number: ${this.state.pokedex}`)
            const newScore = this.state.score - 3
            const temp = this.state.incorrectGuess
            temp.push({ name: this.state.name, sprite: this.state.sprite })
            this.setState({
                score: newScore,
                incorrectGuess: temp
            })
            this.getSprite()
        }
    }

    render() {
        const { resetHH } = this.props
        const { incorrectGuess, correctGuess, sprite, score, clicked } = this.state
        return (
            <footer>
                {clicked ? (
                    <div className="bottom">
                        <img className="pokemon" src={sprite} alt="" />
                        <input type="text" placeholder="Pokemon name" onChange={(e) => this.changeGuessed(e.target.value)} />
                        <button onClick={() => this.guessThatPokemon()}>Who's that pokemon?</button>
                        <h3>Your score {score}</h3>
                        {correctGuess.map((el) => (
                            <div>
                                <h3>Correct: <p>{el.name}</p> </h3>
                                <img src={el.sprite} alt=""/>
                            </div>))}
                        {incorrectGuess.map((el) => (
                            <div>
                                <h3>incorrect: <p>{el.name}</p></h3>
                                <img src={el.sprite} alt=""/>
                            </div>))}
                    </div>

                ) : (
                        <div className="bottom">
                            <Logo />
                            <button onClick={() => this.getSprite()}>Click Me!</button>
                            <h1>Thank you Sam, Matt, and Jonathan!</h1>
                            <button onClick={() => resetHH()}>Reset</button>
                            <Logo />
                        </div>
                    )
                }
            </footer>
        )
    }

}