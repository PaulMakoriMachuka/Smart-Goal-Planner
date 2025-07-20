import React, { useEffect, useState } from "react";
import GoalForm from "./list";
import GoalList from "./pen";
import Overview from "./manh";
import "./App.css";

const API_URL = "http://localhost:5173";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setGoals);
  }, []);

  function addGoal(newGoal) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newGoal,
        savedAmount: 0,
        createdAt: new Date().toISOString().split("T")[0]
      })
    })
      .then((r) => r.json())
      .then((goal) => setGoals([...goals, goal]));
  }

  function deleteGoal(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setGoals(goals.filter((goal) => goal.id !== id)));
  }

  function depositToGoal(id, amount) {
    const goalToUpdate = goals.find((g) => g.id === id);
    const updatedGoal = { ...goalToUpdate, savedAmount: goalToUpdate.savedAmount + amount };

    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount })
    })
      .then((r) => r.json())
      .then((updated) => {
        setGoals(goals.map((g) => (g.id === id ? updated : g)));
      });
  }

  return (
    <div className="app">
      <h1>SMART GOAL PLANNER</h1>
      <GoalForm onAddGoal={addGoal} />
      <Overview goals={goals} />
      <GoalList goals={goals} onDelete={deleteGoal} onDeposit={depositToGoal} />
    </div>
  );
}

export default App;
