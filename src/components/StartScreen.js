import { useContext } from "react";
import { quizContext } from "../context";

function StartScreen() {
  const { numQuestions, dispatch } = useContext(quizContext);
  return (
    <div className="start">
      <h2> Welcome </h2>
      <h3> {numQuestions} questions to test your React mastary </h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
