import React from "react";
import "./Questions.css";

function Questions({ question, answer }) {
  return (
    <>
      <div className="question-container">
        <span className="question">{question}</span>
        <div className="answer">
          <span>{answer}</span>
        </div>
      </div>
    </>
  );
}

export default Questions;
