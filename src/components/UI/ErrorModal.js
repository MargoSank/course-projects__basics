import React from "react";
import style from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div
                className={style.backdrop}
                onClick={props.onCloseError}
            />
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title || "An error occurred!"}</h2>
                </header>
                <div className={style.content}>
                    <p>{props.message || "Something went wrong!"}</p>
                </div>
                <footer className={style.footer}>
                    <Button onClick={props.onCloseError}>Okay</Button>
                </footer>
            </Card>
        </div>

    );
};

export default ErrorModal;