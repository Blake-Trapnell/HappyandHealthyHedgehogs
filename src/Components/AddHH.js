import React, { Component } from "react"
import "./AddHH.css"

export default class addHH extends Component {
    constructor(props) {
        super(props) 
        this.state = {
                name: "",
                age: "",
                friendliness: "",
                breed: "",
                gender: "",
                color: "",
                Image: "",
                Info: "",
            }
        }
        nameChange(e) {
            this.setState({name: e})
        }
        ageChange(e) {
            this.setState({age: e})
        }
        friendlyChange(e) {
            this.setState({friendliness: e})
        }
        breedChange(e) {
            this.setState({breed: e})
        }
        genderChange(e) {
            this.setState({gender: e})
        }
        colorChange(e) {
            this.setState({color: e})
        }
        imageChange(e) {
            this.setState({Image: e})
        }
        infoChange(e) {
            this.setState({Info: e})
        }

    render() {
        const {nameChange, ageChange, friendlyChange, breedChange, genderChange, colorChange, imageChange, infoChange} = this
        return(
            <div>
                <div className="editbar">
                    <h3>Create/Update</h3>
            <input onChange={(e)=> nameChange(e.target.value)}type="text" placeholder= "Name"/>
            <input onChange={(e)=> ageChange(e.target.value)}type="text" placeholder= "age"/>
            <input onChange={(e)=> friendlyChange(e.target.value)}type="text" placeholder= "Friendliness level"/>
            <input onChange={(e)=> breedChange(e.target.value)}type="text" placeholder= "breed"/>
            <input onChange={(e)=> genderChange(e.target.value)}type="text" placeholder= "gender"/>
            <input onChange={(e)=> colorChange(e.target.value)}type="text" placeholder= "Color"/>
            <input onChange={(e)=> imageChange(e.target.value)}type="text" placeholder= "image"/>
            <input onChange={(e)=> infoChange(e.target.value)}type="text" placeholder= "Info"/>
            <div className="create">
            <button onClick={()=>this.props.createHH(this.state)}>Create</button>
            <button onClick={()=> this.props.updateHH(this.state.name, this.state)}>Update</button>
            <button onClick={()=> this.props.searchHH(this.state)}>Search</button>

            </div>
                </div>
            </div>
        )
    }
}