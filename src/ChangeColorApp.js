import React, { Component, useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";



// class ChangeColorApp extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             colorValue: 'Change color!',
//             className: ''
//         };
//     }

//     changeValueAndClass = (action) => {
//         this.setState(prevState => {
// if (action === 'red') {
//     prevState.colorValue = 'Red';
//     prevState.className = action;
// } else if (action === 'green') {
//     prevState.colorValue = 'Green';
//     prevState.className = action;
// } else {
//     prevState.colorValue = 'Blue';
//     prevState.className = action;
// };

// return ({
//     colorValue: prevState.colorValue,
//     className: prevState.className
// });
//         });
//     }


//     render() {

//         return (
//             <div className="change-color-app">
//                 <Display displayValue={this.state.colorValue} className={this.state.className} />
//                 <ButtonPanel buttonMethod={this.changeValueAndClass} />
//             </div>
//         )
//     }
// }


const ChangeColorApp = () => {
    const [colorValue, setColorValue] = useState('Change color!');
    const [className, setClassName] = useState('');

    const changeValueAndClass = (action) => {
        if (action === 'red') {
            setColorValue('Red');
            setClassName(action)
        } else if (action === 'green') {
            setColorValue('Green');
            setClassName(action)
        } else {
            setColorValue('Blue');
            setClassName(action)
        };
    }

    return (
        <div className="change-color-app">
            <Display displayValue={colorValue} className={className} />
            <ButtonPanel buttonMethod={changeValueAndClass} />
        </div>
    );
}


export default ChangeColorApp;