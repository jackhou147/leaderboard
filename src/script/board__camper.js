import React, { Component } from 'react';

function CamperPic(props){
    return (
        <div className="Camper__pic">
            <img src={props.src} alt="profile picture" />
        </div>
    )
}

function CamperInfo(props){
    return (
        <div className="Camper__info">
            <span>{props.index+1}. {props.name}</span>
            <span>{props.pts}</span>
        </div>
    )
}

function ProgressBar(props){
    let style = {
        "width": `${(props.pts/props.highestPt)*100}%`,
        "height":"5px"
    };
    return <div className="Camper__progress-bar"
                style={style}></div>
}

function CamperInfo_ProgressBar(props){
    return (
        <div className="Camper__info-and-progress-bar">
            <CamperInfo name={props.name}
                        pts={props.pts}
                        index={props.index}>
            </CamperInfo>
            <ProgressBar highestPt={props.highestPt}
                         pts={props.pts}></ProgressBar>
        </div>
    )
}

class Camper extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        }
    }
    
    render(){
        let CamperStyle = {
            "backgroundColor": this.state.hovered ? "#F5F8FC" : "transparent"
        };
        let that = this;
        let props = this.props;
        return (
            <div className="Camper" 
                 style={CamperStyle}
                 onMouseOut={function(){
                        props.handleHoverOut();
                        that.setState({
                            hovered: false
                        })
                 }}
                 onMouseOver={function(){
                    props.handleHover(props.src, props.index, props.pts);
                    that.setState({
                        hovered: true
                    })
                    
            }}
                onClick={function(){props.handleHover(props.src, props.index, props.pts)}}>
                <CamperPic src={this.props.src}></CamperPic>
                <CamperInfo_ProgressBar name={this.props.name}
                                        pts={this.props.pts}
                                        index={this.props.index}
                                        highestPt={this.props.highestPt}>
                </CamperInfo_ProgressBar>
            </div>
        )
    }
}

export default Camper;