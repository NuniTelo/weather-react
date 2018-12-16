import React  from 'react';

const InfoSection = (props) => {
    return(
        <div>
            <p>{props.temperature}</p>
            <p>{props.city}</p>
            <p>{props.country}</p>
            <h1>{props.description}</h1>
        </div>
    )
}



export default InfoSection;