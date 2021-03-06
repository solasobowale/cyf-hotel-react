import React from "react"
const TouristsInfoCard = (props) => {
    return (
    < div className="card" style= {{width: "18rem"}}>
    <img src={props.image} class="card-img-top" alt={props.altText}/>
    <div className="card-body">
      <h5 className="card-title">{props.city}</h5>
      <p className="card-text">{props.mainText}</p>
      <a href= {props.website} target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
    }
export default TouristsInfoCard;
