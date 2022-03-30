import React from "react";
import style from "../UI/Card.module.css";


const Card = props => {
    return(
        <div className={`${style.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;