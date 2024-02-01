import React, { useEffect, useState } from "react";

//Data fetching?
// after componenet mount/ render/ load on screen

const endpoint = "https://jsonplaceholder.typicode.com/users";

function LearningDatafetch() {
  // 1st method to fetch data  and to get promises
  //   useEffect(() => {
  //     //data fetch
  //     fetch(endpoint)
  //       .then((response) => {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }),
  //     [];

  //2nd method to fetch data using async await

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  async function getUser() {
    setisLoading(true);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      //Store this inside data
      setUsers(data); // componenet re-render again
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if(isLoading){
    return <h1>Loading....</h1>;
  }

  if (error.trim()) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default LearningDatafetch;
