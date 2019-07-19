import React from "react"
import "./individualHH.css"


 function IndividualHH(props) {
    return(
        <div className= "outsidebox">
                <div className= "hedgehogsShowList">
            {props.hhArray.length > 0 ? props.hhArray.map(el => (
                    <div  className= "individualHH">
                <img src={el.Image} alt={el.name}/>
                    <h3>{el.name}</h3>
                    <h5>{el.age}</h5>
                    <h5>{el.friendliness}</h5>
                    <h5>{el.breed}</h5>
                    <h5>{el.gender}</h5>
                    <h5>{el.color}</h5>
                    <h5>{el.Info}</h5>
            <button onClick={()=> props.sellHH(el.name)}>Sold</button>
                    </div>
            )) : null}
                </div>
        </div>
    )
}
export default IndividualHH;