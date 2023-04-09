import React from "react";

function CheckedAnswers({ data, onresetGame }) {
  const allCorrectAnswers = [];
  data.map((element) => {
    const correctAnswer = element.correct_answer;
    const selectedAnswer = element.answers[element.selectedAnswerIndex];
    if (selectedAnswer === correctAnswer) {
      allCorrectAnswers.push(correctAnswer);
    }
  });
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
                  className={
                    answer === element.correct_answer
                      ? "correct"
                      : element.selectedAnswerIndex === index
                      ? "incorrect"
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
      <p>Your score is {allCorrectAnswers.length} /5 </p>
      <button className="startButton" onClick={onresetGame}>
        Play Again
      </button>
    </div>
  );
}

export default CheckedAnswers;
