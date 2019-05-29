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

export const WanderingCubes = props => {
    return <div className="WanderingCubes"><div style={{background: props.colour}} className="cube1"/><div style={{background: props.colour}} className="cube2"/></div>
}

export const Pulse = props => {
    return <div style={{background: props.colour}} className="Pulse"></div>
}

export const ChasingDots = props => {
    return <div className="ChasingDots"><div style={{background: props.colour}} className="dot1"/><div style={{background: props.colour}} className="dot2"/></div>
}

export const ThreeBounce = props => {
    return <div className="ThreeBounce"><div style={{background: props.colour}} className="bounce1"/><div style={{background: props.colour}} className="bounce2"/><div style={{background: props.colour}} className="bounce3"/></div>
}

export const Circle = props => {

    addCssRule(".Circle .sk-child:before", {
        background: "" + props.colour + "!important",
    });

    return (
        <div className="Circle">
            <div className="sk-circle1 sk-child"/>
            <div className="sk-circle2 sk-child"/>
            <div className="sk-circle3 sk-child"/>
            <div className="sk-circle4 sk-child"/>
            <div className="sk-circle5 sk-child"/>
            <div className="sk-circle6 sk-child"/>
            <div className="sk-circle7 sk-child"/>
            <div className="sk-circle8 sk-child"/>
            <div className="sk-circle9 sk-child"/>
            <div className="sk-circle10 sk-child"/>
            <div className="sk-circle11 sk-child"/>
            <div className="sk-circle12 sk-child"/>
        </div>
    )
}

export const CubeGrid = props => {
    return (
    <div className="CubeGrid">
        <div style={{background: props.colour}} className="sk-cube sk-cube1"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube2"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube3"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube4"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube5"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube6"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube7"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube8"></div>
        <div style={{background: props.colour}} className="sk-cube sk-cube9"></div>
    </div>
    )
}

export const FadingCircle = props => {

    addCssRule(".FadingCircle .sk-circle:before", {
        background: "" + props.colour + "!important",
    });

    return (
    <div className="FadingCircle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
    </div>
    )
}


var addCssRule = (style => {
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css){
        var propText = Object.keys(css).map(function(p){
            return p+":"+css[p]
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    }
})(document.createElement("style"));


