import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goal;

  return (
    <div className="score-container">
      <h2>{props.name}</h2>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Total Marks:</strong> {props.total}</p>
      <p><strong>Goal:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
