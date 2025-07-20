import React from "react";

function GoalList({ goals, onDelete, onDeposit }) {
  const today = new Date();

  function handleDeposit(id) {
    const input = prompt("Enter deposit amount:");
    const amount = parseFloat(input);
    if (!amount || amount <= 0) return;
    onDeposit(id, amount);
  }

  return (
    <div className="goal-list">
      {goals.map((goal) => {
        const percent = Math.min(Math.round((goal.savedAmount / goal.targetAmount) * 100), 100);
        const deadlineDate = new Date(goal.deadline);
        const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

        return (
          <div className="goal-card" key={goal.id}>
            <h4>{goal.name}</h4>
            <p>Category: {goal.category}</p>
            <p>Target: KES {goal.targetAmount}</p>
            <p>Saved: KES {goal.savedAmount}</p>
            <progress value={percent} max="100" />
            <p>{percent}% complete</p>
            <p>Deadline: {goal.deadline}</p>
            {daysLeft < 0 && goal.savedAmount < goal.targetAmount ? (
              <p className="overdue">Overdue!</p>
            ) : daysLeft <= 30 && goal.savedAmount < goal.targetAmount ? (
              <p className="warning">{daysLeft} days left</p>
            ) : (
              <p>{daysLeft} days remaining</p>
            )}
            <button onClick={() => handleDeposit(goal.id)}>Deposit</button>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default GoalList;
