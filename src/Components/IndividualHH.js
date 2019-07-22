import React from "react"
import "./individualHH.css"
import Zoom from 'react-reveal/Zoom';


 function IndividualHH(props) {
    return(
        <div className= "outsidebox">
                <div className= "hedgehogsShowList">
            {props.hhArray.length > 0 ? props.hhArray.map(el => (
                    <div  className= "individualHH">
                <img src={el.Image} alt={el.name}/>
                <div className="textbox">
                    <div>
                    <h2>{el.name}</h2>
                    </div>
                    <div>
                        <Zoom>
                    <h5>Age: <p>{el.age}</p></h5>
                    <h5>Temperament: <p> {el.friendliness} </p></h5>
                    <h5>Breed: <p> {el.breed} </p></h5>
                    <h5>Gender: <p>{el.gender}</p></h5>
                    <h5>Color: <p>{el.color}</p></h5>
                    <h5>Other Info: <p>{el.Info}</p></h5>
                        </Zoom>
                    </div>
            <button onClick={()=> props.sellHH(el.name)}>Sold</button>
                </div>
                    </div>
            )) : null}
                </div>
        </div>
    )
}
export default IndividualHH;