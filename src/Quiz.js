import React from "react";
import QuizQuestion from "./QuizQuestion";
function Quiz({ data }) {
  return (
    <>
      <section>
        <QuizQuestion data={data} />
      </section>
      <button className="startButton">Check Answers</button>
    </>
  );
}

export default Quiz;
