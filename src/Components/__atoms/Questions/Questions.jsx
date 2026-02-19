import React, { useState } from "react";
import "./Questions.css";
import Arrow from "../../../assets/images/Arrow.svg";

function Questions({ question, answer }) {
  const [answerClass, setAnswerClass] = useState("answer");
  const [arrowClass, setArrowClass] = useState("arrow");
  const [questionClass, setQuestionClass] = useState("question");
  return (
    <>
      <div
        onClick={() => {
          setAnswerClass("answerShown");
          setArrowClass("arrow-flipped");
          setQuestionClass("question-selected");

          if (answerClass === "answerShown") {
            setAnswerClass("answer");
          }
          if (arrowClass === "arrow-flipped") {
            setArrowClass("arrow");
          }
          if (questionClass === "question-selected") {
            setQuestionClass("question");
          }
        }}
        className="question-container"
      >
        <div className="question-arrow">
          <span className={questionClass}>{question}</span>
          <img className={arrowClass} src={Arrow} alt="" />
        </div>
        {/* <div className="answer">
          <span className="answer-text">{answer}</span>
        </div> */}

        <div className={answerClass}>
          <span className="answer-text">{answer}</span>
        </div>
      </div>
    </>
  );
}

export default Questions;
