import React, { useState, useEffect } from "react";
import "./App.css";
import blobOne from "./Images/blob1.png";
import blobTwo from "./Images/blob2.png";
import Quiz from "./Quiz";
const APIurl =
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
function App() {
  const [quiz, setQuiz] = useState(false);
  const [data, setData] = useState([]);
  const startQuiz = () => {
    console.log("quiz started");
    setQuiz(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(APIurl)
        .then((res) => res.json())
        .then((res) => setData(res.results));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  console.log(data[0]);
  return (
    <main className="App">
      <img className="blobTop" src={blobOne} alt="" />
      {quiz ? (
        <Quiz data={data} />
      ) : (
        <>
          <h1>Quizzical!</h1>

          <p className="gameDescription">description</p>
          <button onClick={startQuiz} className="startButton">
            Start quiz
          </button>
        </>
      )}
      <img className="blobBottom" src={blobTwo} alt="" />
    </main>
  );
}

export default App;
