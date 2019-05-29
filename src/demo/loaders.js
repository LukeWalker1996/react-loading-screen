import React from "react";

export const SquareFlip = props => {
  return <div style={{ background: props.colour }} className="SquareFlip" />;
};

export const DoublePulse = props => {
    return <div className="DoublePulse"><div style={{background: props.colour}} className="double-bounce1"/><div style={{background: props.colour}} className="double-bounce2"/></div>
}

export const Wave = props => {
    return <div className="Wave"><div style={{background: props.colour}} className="rect1"/><div style={{background: props.colour}} className="rect2"/><div style={{background: props.colour}} className="rect3"/><div style={{background: props.colour}} className="rect4"/></div>
}