import React, { Fragment, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUser}></AddUser>
      {users?.length && <UsersList users={users}></UsersList>}
    </Fragment>
  );
}

export default App;
