import React, { Component } from 'react';
import HeaderSmall from './board__header-small.js';
import HeaderBig from './board__header-big.js';
import CamperList from './board__camper-list.js';
import axios from 'axios';

class Board extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            sortBy: "all time"
        };
        this.toggleSort = this.toggleSort.bind(this);
        this.ajax = this.ajax.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }
    
    toggleSort(param){
        if(typeof param == "string"){
            this.setState({
                sortBy: param
            })
        }else {
            let sortBy = this.state.sortBy;
            this.setState({
                sortBy: sortBy=="all time"?"last 30 days":"all time"
            });
        }
        
    }
    
    handleHover(src,indx,pts){
        console.log(src,indx,pts)
        this.setState({
            display: {
                src:src,
                indx: indx,
                pts: pts
            }
        })
    }
    
    handleHoverOut(){
        this.setState({
            display: undefined
        })
    }
    
    ajax(sortBy){
        let that = this;
        var link = `https://fcctop100.herokuapp.com/api/fccusers/top/${sortBy=="all time"?"alltime":"recent"}`;
        axios.get(link)
            .then(function(response){
                console.log(response);
                that.setState({
                    data: response.data
                })
            })
    }
    
    componentWillMount(){
        this.ajax(this.state.sortBy);
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.sortBy !== this.state.sortBy){
            this.ajax(this.state.sortBy);
        } 
    }
    
    render(){
        let data = this.state.data,
            sortBy = this.state.sortBy;
        return (
            <div className="board">
                <HeaderSmall 
                        text={this.state.sortBy}
                        display={this.state.display}>
                </HeaderSmall>
                <HeaderBig clickHandler={this.toggleSort} sortBy={sortBy}></HeaderBig>
                {data && <CamperList data={data}
                                     sortBy={sortBy}
                                     handleHover={this.handleHover}
                                     handleHoverOut={this.handleHoverOut}
                                     barClickHandler={this.toggleSort}>
                         </CamperList>}
            </div>
        )
    }
}

export default Board;