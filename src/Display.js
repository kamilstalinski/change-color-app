import React, { Component } from "react";
import './Display.css'


// class Display extends Component {

//     render() {
//         return (
//             <h1 className={this.props.className}>{this.props.displayValue} color</h1>

//         )
//     }
// };

const Display = (props) => {
    return (
        <h1 className={props.className}>{props.displayValue}</h1>
    );
}

export default Display;