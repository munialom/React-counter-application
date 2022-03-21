import React, { Component } from "react";
import './counter.css'



class ExpressCounter extends Component {

   constructor(){
       //inside constructotr initialize state
       //always use super key word in constrcutor 
       super();
       this.state={
           counter : 0
       }
       this.increment=this.increment.bind(this);
   }

    render() {
        return (

            <div className="expressCounter">

                <button onClick={this.increment}>{this.props.by}</button>
                <span className="count">{this.state.counter}</span>

            </div>
        )
    }
// will need to declare an increment method on the main class
//we will not use the funciton key word inside a class component 

increment(){
  this.setState({
      counter : this.state.counter +this.props.by

  });
   
}


}
export default ExpressCounter;