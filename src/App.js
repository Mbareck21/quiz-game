import React, { useState, useEffect } from "react";
import "./App.css";
import blobOne from "./Images/blob1.png";
import blobTwo from "./Images/blob2.png";
import QuizQuestion from "./QuizQuestion";
import { nanoid } from "nanoid";

const APIurl =
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  useEffect(() => {
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
  }, []);

  console.log("dataElements", data);
  const holdAnswer = (id, index) => {
    const updatedData = data.map((element) => {
      return element.id === id
        ? { ...element, isHeld: !element.isHeld }
        : element;
    });
    setSelectedAnswer(index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };
  console.log("updatedData", data);
  return (
    <main className="App">
      <img className="blobTop" src={blobOne} alt="" />

      {start ? (
        <QuizQuestion
          data={data}
          onHold={holdAnswer}
          selectedAnswer={selectedAnswer}
        />
      ) : (
        <>
          <h1>Quizzical!</h1>

          <p className="gameDescription">description</p>
          <button onClick={() => setStart(true)} className="startButton">
            Start quiz
          </button>
        </>
      )}

      <img className="blobBottom" src={blobTwo} alt="" />
    </main>
  );
}

export default App;
