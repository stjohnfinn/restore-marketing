import styling from '../../styles/Main.module.css';
import React, {useState} from 'react';

function Transition(props) {

    return (
        <div className={styling.transitionCont} >
            <div style={{backgroundColor: props.start, borderTop: props.start + ' 2px solid'}} className={styling.tranStart} ></div>
            <div style={{backgroundColor: props.one}} className={styling.tranSecond} ></div>
            <div style={{backgroundColor: props.two}} className={styling.tranThird} ></div>
            <div style={{backgroundColor: props.end, borderBottom: props.end + ' 2px solid'}} className={styling.tranEnd} ></div>
        </div>
    )
}

export default Transition;