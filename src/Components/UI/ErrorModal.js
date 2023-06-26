import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.errorHandler} className={classes.backdrop}></div>
}

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorHandler} >Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop errorHandler={props.errorHandler}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} errorHandler={props.errorHandler} />, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default ErrorModal;