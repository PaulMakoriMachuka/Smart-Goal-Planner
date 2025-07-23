



import { useState } from "react";


function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "Name:",
    targetAmount: "Target:",
    totalAmount:"Total:",
    category: "Category:",
    created :"Created:",
    deadline: "Deadline:",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "Name:", targetAmount: "Target:",totalAmount: "Total:", category: "Category:" ,created: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label>Goal Name</label>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" />
      <label>Target Amount</label>
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" />
<<<<<<< HEAD
      <label>Total Amount</label>
      <input name="totalAmount" value={formData.totalAmount} onChange={handleChange} placeholder="Total Amount" />
      <label>Category</label>
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <label>Created</label>
      <input type="date" name="created" value={formData.created} onChange={handleChange} placeholder="Created" />
      <label>Deadline</label>
      <input  type="date" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="Deadline" />
=======
      <input name="totalAmount" value={formData.totalAmount} onChange={handleChange} placeholder="Total Amount" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input type="date"name="created" value={formData.created} onChange={handleChange} placeholder="Created" />
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="Deadline" />
>>>>>>> ea23b02 (date)
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;