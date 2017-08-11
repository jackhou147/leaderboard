import React, { Component } from 'react';
import Camper from './board__camper.js';
import {HeaderOptionBar_small} from './HeaderOptionBar.js';

class CamperList extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="board__camper-list">
                <HeaderOptionBar_small clickHandler={this.props.barClickHandler}
                                       sortBy={this.props.sortBy}></HeaderOptionBar_small>
                {this.props.data.map((obj, index) => {
                    return (
                        <Camper name={obj.username}
                                src={obj.img}
                                pts={this.props.sortBy == "all time"?obj.alltime: obj.recent}
                                index={index}
                                key={index}
                                highestPt={this.props.data[0][this.props.sortBy == "all time"? "alltime":"recent"]}
                                handleHover={this.props.handleHover}
                                handleHoverOut={this.props.handleHoverOut}>
                        </Camper>
                    )
                })}
            </div>
        )
    }
}


export default CamperList;