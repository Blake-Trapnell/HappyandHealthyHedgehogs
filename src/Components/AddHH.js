import React, { Component } from "react"

export default class addHH extends Component {
    constructor() {
        super() 
        this.state = {
                name: "",
                age: 0,
                friendliness: "",
                breed: "",
                gender: "",
                color: "",
                Image: "",
                info: "",
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
            this.setState({color: e})
        }
        infoChange(e) {
            this.setState({color: e})
        }

    render() {
        return(
            <div>
                <div className="adjust">
                    <h3>Create/Update</h3>
            <input onChange={(e)=> this.nameChange(e.target.value)}type="text" placeholder= "Name"/>
            <input onChange={(e)=> this.ageChange(e.target.value)}type="text" placeholder= "age"/>
            <input onChange={(e)=> this.friendlyChange(e.target.value)}type="text" placeholder= "Friendliness level"/>
            <input onChange={(e)=> this.breedChange(e.target.value)}type="text" placeholder= "breed"/>
            <input onChange={(e)=> this.genderChange(e.target.value)}type="text" placeholder= "gender"/>
            <input onChange={(e)=> this.colorChange(e.target.value)}type="text" placeholder= "Color"/>
            <input onChange={(e)=> this.imageChange(e.target.value)}type="text" placeholder= "image"/>
            <input onChange={(e)=> this.infoChange(e.target.value)}type="text" placeholder= "Info"/>
                </div>
            <button onClick={()=>this.props.createHH(this.state)}>Create</button>
            </div>
        )
    }
}