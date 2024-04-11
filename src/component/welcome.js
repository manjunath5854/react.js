import React, {Component}from "react";

class Welcome extends Component {
    render(){
        return <h1>welcome{this.props.name}friend{this.props.rel}</h1>
    }
}
export default Welcome;