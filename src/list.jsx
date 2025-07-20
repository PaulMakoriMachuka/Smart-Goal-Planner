import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Goal name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="targetAmount" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
