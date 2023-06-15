import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUserName || !enteredAge || !enteredUserName.trim().length || !enteredAge.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please provide valid values for age and username (non empty)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please provide valid age (>0)'
      })
      return;
    }
    props.onAddUser({
      name: enteredUserName,
      age: enteredAge,
      id: Math.random().toString()
    });
  }

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(); 

  const onChangeHandler = (event, type) => {
    if (type === 'username') {
      setEnteredUserName(event.target.value)
    } else {
      setEnteredAge(event.target.value)
    }
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal errorHandler={errorHandler} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUserName} onChange={(event) => onChangeHandler(event, 'username')} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={(event) => onChangeHandler(event, 'age')} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;