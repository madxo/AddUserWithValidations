import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper"

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const [error, setError] = useState(); 

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal errorHandler={errorHandler} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number"/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;