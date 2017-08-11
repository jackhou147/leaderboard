import React, { Component } from 'react';
import {TweenMax, Power3} from "gsap";

class HeaderOptionBar_small extends Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.props.clickHandler();
        let toggleSwitch = document.querySelector(".Header__toggle-switch");
        if(this.props.sortBy == "all time"){
            TweenMax.to(toggleSwitch, .4, {
                right: 0,
                left: "50%",
                ease: Power3.easeOut
            })
        }else {
            TweenMax.to(toggleSwitch, .4, {
                left: 0,
                right: "50%",
                ease: Power3.easeOut
            })
        }
        
    }
    
    render(){
        return (
            <div className="Header__option-bar" onClick={this.clickHandler}>
                <span>All Time</span>
                <span>Last month</span>
                <div className="Header__toggle-switch"></div>
            </div>
        )
    }
}

class HeaderOptionBar_big extends Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(param){
        let camperList = document.querySelector(".board__camper-list"),
            that = this;
        this.props.clickHandler(param);
        TweenMax.to(camperList, .3, {
            left: "-100vw",
            onComplete: function(){
                TweenMax.fromTo(camperList,.3,{
                    left: "100vw"
                }, {
                    left: "8vw" 
                })
            }
        })
    }
    
    render(){
        let style = {
            color: "white"
        }
        let that = this;
        return (
            <div className="Header__option-bar">
                <span 
                    style={that.props.sortBy=="all time"?{}:style}
                    onClick={function(){that.clickHandler("last 30 days")}}>Last month</span>
                <span 
                    style={that.props.sortBy=="all time"?style:{}}
                    onClick={function(){that.clickHandler("all time")}}>All Time</span>
            </div>
        )
    }
}



export {HeaderOptionBar_small, HeaderOptionBar_big}