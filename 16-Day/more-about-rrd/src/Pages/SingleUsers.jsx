import React from "react";
import { useParams } from "react-router-dom";
function SingleUsers() {
  const {userId} = useParams();

  return <h1>Hello user with id: {userId}</h1>;
}

export default SingleUsers;
