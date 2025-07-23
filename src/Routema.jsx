import { useState } from "react";
  

function GoalItem({ goal, onUpdateGoal, onDeleteGoal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...goal });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdate(e) {
    e.preventDefault();
    onUpdateGoal(formData);
    setIsEditing(false);
  }

  return (
    <div>
      <div>
      <h2>GAOL LIST</h2>
      </div>
      <div>
    <li style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} />
          <input name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
          <input name="category" value={formData.category} onChange={handleChange} />
          <input name="created" value={formData.created} onChange={handleChange} />
          <input  name="deadline" value={formData.deadline} onChange={handleChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <strong>{goal.name}</strong> - {goal.targetAmount}   - {goal.totalAmount}  - {goal.category} - {goal.created} - {goal.deadline}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </div>
      )}
    </li>
    </div>
    </div>
  );
}

export default GoalItem;
