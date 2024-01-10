//import { useState } from "react";
import {PropTypes} from 'prop-types';
import './Counter.css';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    //const [count, setCount] = useState(0);

    const buttonStyle = {
        fontSize : "30px",
        backgroundColor : "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px",
        borderColor: "black",
        borderWidth: "5px",
    };

    // function incrementCounterFunction(){
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction(){
    //     decrementMethod(by);
    // }

    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                onClick={() => incrementMethod(by)}
                style={buttonStyle}
                >+{by}</button>

                <button className="counterButton" 
                onClick={() => decrementMethod(by)}
                style={buttonStyle}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
};

CounterButton.defaultProps = {
    by:1
};