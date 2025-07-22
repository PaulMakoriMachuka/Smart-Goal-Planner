



import { useState } from "react";


function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    totalAmount:"",
    category: "",
    created :"",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "",totalAmount: "", category: "" ,created: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" />
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" />
      <input name="totalAmount" value={formData.totalAmount} onChange={handleChange} placeholder="Total Amount" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input type="date"name="created" value={formData.created} onChange={handleChange} placeholder="Created" />
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="Deadline" />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;