import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  return (
    <div>
      <AddUser onAddUser={addUser}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
