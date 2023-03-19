import React from "react";
function QuizQuestion({ data }) {
  return (
    <div className="questionElementContainer">
      <ul>
        {data.map((question) => (
          <li key={question.correct_answer}>
            <p className="questionText">{question.question}</p>
            <div className="answersList">
              {question.incorrect_answers.map((answer, idx) => {
                return (
                  <span className="answersListItem" key={idx}>
                    {answer}
                  </span>
                );
              })}
              <span className="answersListItem">{question.correct_answer}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestion;
