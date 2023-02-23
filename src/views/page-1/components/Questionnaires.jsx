import { useState } from "react";
import {
  AddQuestionnaire,
  Questions,
  SubmitBtn,
  QuestionnaireTitleField,
} from ".";

const Questionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  const handleTitleUpdate = (position, e) => {
    setQuestionnaires((prev) => {
      const data = [...prev];
      data[position][e.target.name] = e.target.value;
      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(questionnaires);
    console.log(JSON.stringify(questionnaires));
  };

  const addQuestionnaire = () => {
    setQuestionnaires((prev) => [
      ...prev,
      {
        name: "",
        questions: [],
      },
    ]);
  };

  const updateQuestions = (position, questions) => {
    setQuestionnaires((prev) => {
      const data = [...prev];
      data[position].questions = questions;

      return data;
    });
  };
  return (
    <>
      {questionnaires.map((questionnaire, i) => {
        const { name, questions } = questionnaire;

        return (
          <div
            style={{
              padding: "2rem",
              marginBottom: "2rem",
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: "1rem",
            }}
          >
            <QuestionnaireTitleField
              position={i}
              label="TItle"
              name={name}
              handleTitleChange={handleTitleUpdate}
              placeholder="Group name"
            />
            <Questions position={i} updateQuestions={updateQuestions} />
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <AddQuestionnaire addQuestionnaire={addQuestionnaire} />
        <SubmitBtn handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Questionnaires;
