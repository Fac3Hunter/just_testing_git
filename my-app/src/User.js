import { nanoid } from "nanoid";
import React, { useState } from "react";

function User({ id, banned, name, surname, age, banUser }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{banned}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => banUser(id)}>ЗАБАНИТЬ</button>
      </td>
    </tr>
  );
}

function Users() {
  const initUsers = [
    { id: nanoid(), name: "user1", surname: "surn1", age: 30, banned: false },
    { id: nanoid(), name: "user2", surname: "surn2", age: 31, banned: false },
    { id: nanoid(), name: "user3", surname: "surn3", age: 32, banned: false },
  ];

  const [users, setUsers] = useState(initUsers);

  function banUser(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, banned: true };
        }
        return user;
      })
    );
  }

  const renderedUsers = users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      banned={user.banned ? "забанен" : "дышит"}
      surname={user.surname}
      age={user.age}
      banUser={banUser}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>banned</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

export default Users;
