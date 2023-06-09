import React from "react";
function QuizQuestion({ data, onHold, oncheckAnswers, onshowAnswers }) {
  return (
    <div className="questionElementContainer">
      <ul className="elementList">
        {data.map((element) => (
          <li key={element.id} className="elementListItem">
            <h4 className="elementQuestion">{element.question}</h4>
            <ul className="elementAnswerList">
              {element.answers.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => onHold(element.id, index)}
                  className={
                    element.isHeld && element.selectedAnswerIndex === index
                      ? "elementAnswerListItemHeld"
                      : "elementAnswerListItem"
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button className="checkButton" onClick={oncheckAnswers}>
        Check Answers
      </button>
    </div>
  );
}

export default QuizQuestion;
