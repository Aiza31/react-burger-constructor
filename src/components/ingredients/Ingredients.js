import React from 'react';

const Ingredients = props => {
    return (

        <div style={{display: "flex", alignItems: "center"}}><
            img onClick={props.imgButton} src={props.img} alt="Logo" width={"40px"}/>
            <p style={{padding: "25px"}}>{props.name}</p>
            <p style={{padding: "25px"}}>x {props.count}</p>
            <button onClick={props.button}>X</button>
        </div>

    )
};

export default Ingredients;
