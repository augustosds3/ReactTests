import React from 'react';
import classes from './Modal.module.css'
import Auxiliar from '../../../hoc/Auxiliar';
import BackDrop from '../BackDrop/BackDrop';


const Modal = (props) => (
    <Auxiliar>
        <BackDrop show = {props.show} clicked = {props.modalClosed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxiliar>
);

export default Modal;