import { useState, useEffect } from "react";
import { Question, AddQuestion } from "./";

const Questions = ({ updateQuestions, position }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    updateQuestions(position, questions);
  }, [questions]);

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
      skipOn: null,
      required: null,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateChoices = (index, choices) => {
    const data = [...questions];
    data[index].choices = choices;
  };
  const updateQuestion = (index, event) => {
    const data = [...questions];
    if (event.target.type === "checkbox") {
      data[index][event.target.name] = event.target.checked;
    } else if (event.target.name === "choices") {
      console.log(123);
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setQuestions(data);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          question={question}
          updateChoices={updateChoices}
          updateQuestion={updateQuestion}
        />
      ))}

      <AddQuestion questions={questions} addQuestion={addQuestion} />
    </div>
  );
};

export default Questions;
