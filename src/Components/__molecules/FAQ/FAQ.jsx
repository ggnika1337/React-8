import React from "react";
import "./FAQ.css";
import Line from "../../__atoms/Line/Line";
import Questions from "../../__atoms/Questions/Questions";

function FAQ() {
  return (
    <>
      <div className="faq-container">
        <h1 className="heading">FAQ</h1>
        <div>
          <Questions
            question="How many team members can I invite?"
            answer="You can invite 3 team members."
          />
          <Line />
          <Questions
            question="What is the maximum file upload size?"
            answer="No more than 2GB. All files in your account 
must fit your allotted storage space."
          />
          <Line />
          <Questions
            question="How do I reset my password?"
            answer="Go into settings and security."
          />
          <Line />
          <Questions
            question="Can I cancel my subscription?"
            answer="You can cancel your subscription through the billings tab."
          />
          <Line />
          <Questions
            question="Do you provide additional support?"
            answer="You can get additional support through tickets."
          />
          <Line />
        </div>
      </div>
    </>
  );
}

export default FAQ;
