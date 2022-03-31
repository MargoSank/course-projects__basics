import React from "react";
import style from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onCloseError} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.message}</p>
            </div>
            <footer className={style.actions}>
                <Button onClick={props.onCloseError}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCloseError={props.onCloseError} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onCloseError={props.onCloseError}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};
export default ErrorModal;