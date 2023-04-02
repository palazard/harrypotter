import React from "react";
import './Circle.css';

const Circle = (props) => {
    return (
            <div className="circle" onAnimationEnd={props.circleAnimationEnd}></div>
    )
}

export default Circle;
