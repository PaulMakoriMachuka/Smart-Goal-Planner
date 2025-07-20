import React from "react";

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const goalsCompleted = goals.filter((g) => g.savedAmount >= g.targetAmount);

  return (
    <div className="overview">
      <h3>Overview</h3>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: KES {totalSaved}</p>
      <p>Goals Completed: {goalsCompleted.length}</p>
    </div>
  );
}

export default Overview;

