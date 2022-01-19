import React, { Component } from "react";

import './ButtonPanel.css';

// class ButtonPanel extends Component {
//     render() {
//         return (

//             <div className="button-panel" >
//                 <button onClick={() => { this.props.buttonMethod('red') }}>red</button>
//                 <button onClick={() => { this.props.buttonMethod('green') }}>green</button>
//                 <button onClick={() => { this.props.buttonMethod('blue') }}>blue</button>
//             </div>
//         );
//     }
// };

const ButtonPanel = (props) => {
    return (
        <div className="button-panel" >
            <button onClick={() => { props.buttonMethod('red') }}>red</button>
            <button onClick={() => { props.buttonMethod('green') }}>green</button>
            <button onClick={() => { props.buttonMethod('blue') }}>blue</button>
        </div>
    );
}

export default ButtonPanel;
