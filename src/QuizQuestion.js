import React from "react";
function QuizQuestion({ data, onHold, selectedAnswer }) {
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
                    element.isHeld && selectedAnswer === index
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
      <button className="checkButton">Check Answers</button>
    </div>
  );
}

export default QuizQuestion;
