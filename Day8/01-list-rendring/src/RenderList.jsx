import React from "react";

// 1st method
// const taskListLis = [];
// for (let task of taskList) {
//   const taskLi = <li>{task}</li>;
//   taskListLis.push(taskLi);
// }

// 2nd method for-each
// taskList.forEach((task) => {
//   const taskLi = <li>{task}</li>
//   taskListLis.push(taskLi)
// });

// 3rd method using map

// const taskListLis = taskList.map((task) => {
//     return <li>{task}</li>
// });
// implicit;
// const taskListLis = taskList.map((task) => <li>{task}</li>);

function RenderList() {
  const taskList = ["teach students", "play cricket", "improve UI"];
  return (
    //method 1st, 2nd and 3rd we can make it by making new array by calling let of, for each, map
    <div>
      <h1>List</h1>
      <ul>
        {taskList.map((task) => {
          return <li>{task}</li>
        })}
      </ul>
    </div>
  );
}

export default RenderList;
