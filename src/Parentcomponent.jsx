// import React, { useState } from "react";
// import Routema from "./Routema";
// import Table from "./Table";

// function GoalDashboard() {
//   const [goals, setGoals] = useState([]);

//   function addGoal(newGoal) {
//     setGoals([...goals, newGoal]);
//   }

//   function removeGoal(index) {
//     const updatedGoals = goals.filter((_, i) => i !== index);
//     setGoals(updatedGoals);
//   }

//   return (
//     <div>
//       <Routema page="Routema" onAddGoal={addGoal} />
//       <Table goals={goals} onRemoveGoal={removeGoal} />
//     </div>
//   );
// }

// export default GoalDashboard;


import { useEffect, useState } from "react";
import GoalForm from "./Table";
import GoalItem from "./Routema";

function GoalDashboard() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/goals/")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  function handleAddGoal(newGoal) {
    fetch("http://localhost:4000/goals/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prev) => [...prev, data]));
  }

  function handleUpdateGoal(updatedGoal) {
    fetch(`http://localhost:4000/goals/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) =>
        setGoals((prev) => prev.map((goal) => (goal.id === data.id ? data : goal)))
      );
  }

  function handleDeleteGoal(id) {
    fetch(`http://localhost:4000/goals/${id}`, { method: "DELETE" })
      .then(() => setGoals((prev) => prev.filter((goal) => goal.id !== id)));
  }

  return (
    <div>
      <h2>My Financial Goals</h2>
      <GoalForm onAddGoal={handleAddGoal} />
      <ul>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            onUpdateGoal={handleUpdateGoal}
            onDeleteGoal={handleDeleteGoal}
          />
        ))}
      </ul>
    </div>
  );
}

export default GoalDashboard;
