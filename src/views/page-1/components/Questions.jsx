import { useState } from "react";
import { Question, AddQuestion, SubmitBtn } from "./";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const questionPosition = questions.length + 1;
    const newQuestion = {
      canSkipNextQuestion: null,
      skipable: null,
      questionPosition,
      type: "text",
      name: "",
      title: "",
      description: "",
      choices: null,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (index, event) => {
    const data = [...questions];
    if (
      event.target.name === "canSkipNextQuestion" ||
      event.target.name === "skipable"
    ) {
      data[index][event.target.name] = !data[index][event.target.name];
    } else {
      data[index][event.target.name] = event.target.value;
      setQuestions(data);
    }
  };

  const submitQuestions = (e) => {
    e.preventDefault();
    console.log(questions);
    console.log(JSON.stringify(questions));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question question={question} updateQuestion={updateQuestion} />
      ))}

      <AddQuestion questions={questions} addQuestion={addQuestion} />
      <SubmitBtn submitQuestions={submitQuestions} />
    </div>
  );
};

export default Questions;
