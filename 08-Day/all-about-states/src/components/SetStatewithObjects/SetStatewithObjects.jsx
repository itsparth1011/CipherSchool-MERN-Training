import React, { useState } from "react";

function SetStatewithObjects() {
  const [user, setUser] = useState({
    firstName: "bhupendra",
    age: 20,
    gender: "male",
  });
  function changeUser() {
     const newUser = {...user, firstName: "Chauhan"};
     setUser(newUser);
  }
  return (
    <div>
      <h3>SetStatewithObjects</h3>
      <h3>UserName: {user.firstName}</h3>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
}

export default SetStatewithObjects;
