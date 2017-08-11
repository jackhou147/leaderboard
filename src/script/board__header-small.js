import React, { Component } from 'react';
import { MatchMediaHOC } from 'react-match-media';

function Display(props){
    let style1 = {
        width: "100%",
        height: "40%",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "space-around",
        "align-items": "center",
        color: "white",
        "margin-top": "5%",
        "position": "absolute",
        "bottom": "5px"
    },
        avatarStyle = {
            "width": "30%",
            "height": "100%",
            "backgroundImage": `url(${props.src})`,
            "backgroundSize": "contain",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center"
        },
        avatarImgStyle = {
            width: "60%",
            "border-radius": "50%",
            "margin-left": "20%"
        },
        place = props.indx + 1;
    return (
        <div className="Header__display-camper" style={style1}>
            <div className="Header__placing">
                {place}{place == 1 ? "st" : place == 2? "nd" : place == 3? "rd" : "th"}
            </div>
            
            <div className="Header__avatar" style={avatarStyle}>
                {/*<img src={props.src} style={avatarImgStyle}></img>*/}
            </div>
            
            <div className="Header__points">
                {props.pts} pts
            </div>
        </div>
    )
}

function HeaderSmall(props){
    let headerStyle = {
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": props.display? "flex-start" : "center",
        "paddingTop": props.display?"10%":"0",
        "height": "20vh",
        "background": "#5ca1c9", 
        "background": "-moz-linear-gradient(-45deg,  #5ca1c9 2%, #2089ca 41%, #606cb1 73%, #606cb1 76%, #606cb1 81%, #606cb1 85%, #606cb1 85%, #606cb1 86%)", 
        "background": "-webkit-linear-gradient(-45deg,  #5ca1c9 2%,#2089ca 41%,#606cb1 73%,#606cb1 76%,#606cb1 81%,#606cb1 85%,#606cb1 85%,#606cb1 86%)",
        "background": "linear-gradient(135deg,  #5ca1c9 2%,#2089ca 41%,#606cb1 73%,#606cb1 76%,#606cb1 81%,#606cb1 85%,#606cb1 85%,#606cb1 86%)", 
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#5ca1c9', endColorstr='#606cb1',GradientType=1 )", 
        "position": "fixed",
        "width": "90vw",
        "border-top-left-radius": "10px",
        "border-top-right-radius": "10px",
        "-webkit-box-shadow": "0px 9px 12px -3px rgba(0,0,0,0.41)",
        "-moz-box-shadow": "0px 9px 12px -3px rgba(0,0,0,0.41)",
        "box-shadow": "0px 9px 12px -3px rgba(0,0,0,0.41)"
    },
        headerTitleStyle = {
            "color": "white"
        };
    return (
        <div className="Header" style={headerStyle}>
            <div className="Header__title" style={headerTitleStyle}>{!props.display&&"Camper "}Leaderboard</div>
            {props.display && <Display indx={props.display.indx}
                                       src={props.display.src}
                                       pts={props.display.pts}></Display>}
        </div>
    )
}

export default MatchMediaHOC(HeaderSmall, '(max-width: 600px)');