import React, { useState, useEffect } from "react";
import "./App.css";

import QuizQuestion from "./QuizQuestion";
import { nanoid } from "nanoid";

const APIurl =
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!start) return;
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setData(storedData);
    } else {
      fetch(APIurl)
        .then((res) => res.json())
        .then((res) => {
          const response = res.results.map((element) => {
            let answers = [...element.incorrect_answers];
            answers.push(element.correct_answer);
            return {
              ...element,
              answers: answers,
              id: nanoid(),
              isHeld: false,
            };
          });
          setData(response);
          localStorage.setItem("data", JSON.stringify(response));
        });
    }
  }, [start]);

  console.log("dataElements", data);
  const holdAnswer = (id, index) => {
    const updatedData = data.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          isHeld: !element.isHeld,
          selectedAnswerIndex: index,
        };
      } else {
        return element;
      }
    });
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  console.log("updatedData", data);
  return (
    <main className="App">

      {start ? (
        <QuizQuestion data={data} onHold={holdAnswer} />
      ) : (
        <>
          <h1>Quizzical!</h1>

          <p className="gameDescription">
            Welcome to Quizzical! Put your knowledge to the test with our
            exciting and challenging quiz game. Dive into a world of trivia
            spanning various categories, and see how much you really know. Are
            you ready to take on the challenge? Start the game now and prove
            your mettle!
          </p>

          <button onClick={() => setStart(true)} className="startButton">
            Start quiz
          </button>
        </>
      )}

    </main>
  );
}

export default App;
