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
        const {createHH, updateHH, searchHH,} = this.props
        return(
            <div>
                <section className="editbar">
                    <h3>Create/Update</h3>
            <input onChange={(e)=> this.nameChange(e.target.value)}type="text" placeholder= "Name"/>
            <input onChange={(e)=> this.ageChange(e.target.value)}type="text" placeholder= "age"/>
            <input onChange={(e)=> this.friendlyChange(e.target.value)}type="text" placeholder= "temperament"/>
            <input onChange={(e)=> this.breedChange(e.target.value)}type="text" placeholder= "breed"/>
            <input onChange={(e)=> this.genderChange(e.target.value)}type="text" placeholder= "gender"/>
            <input onChange={(e)=> this.colorChange(e.target.value)}type="text" placeholder= "Color"/>
            <input onChange={(e)=> this.imageChange(e.target.value)}type="text" placeholder= "image"/>
            <input onChange={(e)=> this.infoChange(e.target.value)}type="text" placeholder= "Info"/>
            <div className="create">
            <button onClick={()=> createHH(this.state)}>Create</button>
            <button onClick={()=> updateHH(this.state.name, this.state)}>Update</button>
            <button onClick={()=> searchHH(this.state.name)}>Search</button>

            </div>
                </section>
            </div>
        )
    }
}