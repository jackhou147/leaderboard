import React, { Component } from 'react';
import { MatchMediaHOC } from 'react-match-media';
import {HeaderOptionBar_big} from "./HeaderOptionBar.js"

function HeaderBig(props){
    
    return (
        <div className="Header">
            <HeaderOptionBar_big clickHandler={props.clickHandler} sortBy={props.sortBy}></HeaderOptionBar_big>
        </div>
    )
}

export default MatchMediaHOC(HeaderBig, '(min-width: 600px)');



