import React from "react"

 function IndividualHH(props) {
    return(
        <div>
            {props.hhArray.length > 0 ? props.hhArray.map(el => (
                <div className= "individualHH">
                    <h3 className= "hedgehogPortrait">{el.image}</h3>
                    <h3>{el.name}</h3>
                    <h3>{el.friendliness}</h3>
                    <h3>{el.color}</h3>
                    <h3>{el.gender}</h3>
                </div>
            )) : null}
        </div>
    )
}
export default IndividualHH;