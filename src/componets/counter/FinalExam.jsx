


import React, { Component } from "react";
import './counter.css'



class MosesCounter extends Component {
    //create a constructor in  class component

    constructor(){
        super();
        this.state={

            moses : 0,
            andrew : 9
        }

        this.increment=this.increment.bind(this);
    }


    render() {

        return (

            <div className="counterMoses">
                <button onClick={this.increment}></button>
                <span className="sesomCount">{this.state.moses}</span>
            </div>
        );
    }

    //create a  method to increment

    increment(){
        this.setState({
            moses : this.state.moses +this.props.by
        });


    }

}
export default MosesCounter