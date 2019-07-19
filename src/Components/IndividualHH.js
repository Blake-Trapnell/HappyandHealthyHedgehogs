import React from "react"
import { url } from "inspector";

 function IndividualHH(props) {
    return(
        <div className= "outside">
            {props.hhArray.length > 0 ? props.hhArray.map(el => (
                <div className= "individualHH">
                <img src={el.Image} alt={el.name}/>
                    <h3>{el.name}</h3>
                    <h5>{el.age}</h5>
                    <h5>{el.friendliness}</h5>
                    <h5>{el.color}</h5>
                    <h5>{el.gender}</h5>
            <button onClick={()=> props.sellHH(el.name)}>Sold</button>
                </div>
            )) : null}
        </div>
    )
}
export default IndividualHH;