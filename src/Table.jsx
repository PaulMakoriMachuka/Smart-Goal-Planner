import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    totalAmount: "",
    category: "",
    created: "",
    deadline: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation: check if any field is empty
    for (const key in formData) {
      if (formData[key].trim() === "") {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }

    onAddGoal(formData);

    // Reset form
    setFormData({
      name: "",
      targetAmount: "",
      totalAmount: "",
      category: "",
      created: "",
      deadline: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label>Goal Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal Name"
      />

      <label>Target Amount</label>
      <input
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        placeholder="Target Amount"
        type="number"
      />

      <label>Total Amount</label>
      <input
        name="totalAmount"
        value={formData.totalAmount}
        onChange={handleChange}
        placeholder="Total Amount"
        type="number"
      />

      <label>Category</label>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />

      <label>Created</label>
      <input
        type="date"
        name="created"
        value={formData.created}
        onChange={handleChange}
      />

      <label>Deadline</label>
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
      />

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
