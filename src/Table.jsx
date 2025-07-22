// import React from "react";

// function Table({ goals = [], onRemoveGoal }) {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Goal Name</th>
//           <th>Target Amount</th>
//           <th>Total Amount</th>
//           <th>Category</th>
//           <th>Created</th>
//           <th>Deadline</th>
//           <th>Handle</th>
//         </tr>
//       </thead>
//       <tbody>
//         {goals.map((goal, index) => (
//           <tr key={index}>
//             <th scope="row">{index + 1}</th>
//             <td>{goal.name}</td>
//             <td>{goal.targetAmount}</td>
//             <td>{goal.totalAmount}</td>
//             <td>{goal.category}</td>
//             <td>{goal.created}</td>
//             <td>{goal.deadline}</td>
//             <td>
//               <button onClick={() => onRemoveGoal(index)}>Remove</button>
              
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table;



import { useState } from "react";


function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" />
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" />
      <input name="totalAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Total Amount" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input name="created" value={formData.deadline} onChange={handleChange} placeholder="Created" />
      <input name="deadline" value={formData.deadline} onChange={handleChange} placeholder="Deadline" />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;