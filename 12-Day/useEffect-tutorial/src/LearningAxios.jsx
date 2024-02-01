import React, { useEffect, useState } from "react";
import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/users";

function LearningAxios() {
  const [users, setUser] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState("");

  async function getUser() {
    try {
      const response = await axios.get(endpoint);
      const data = response.data;
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error.trim()) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LearningAxios;
