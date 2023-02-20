import { update } from "lodash";
import { useState, useEffect } from "react";
import { SkipOnField } from "./";

const ChoicesField = ({
  choices: state,
  canSkipNextQuestion,
  updateChoices,
  questionPosition,
}) => {
  const [choices, setChoices] = state ? useState(state) : useState([]);
  const [choice, setChoice] = useState("");

  const handleClick = (event) => {
    setChoices((prevChoices) => [...prevChoices, choice]);
    setChoice("");
  };

  const removeItem = (i, event) => {
    setChoices((prevChoices) => {
      return prevChoices.filter((choice, index) => index !== i);
    });
  };

  useEffect(() => {
    updateChoices(questionPosition - 1, choices);
  }, [choices]);

  return (
    <>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          value={choice}
          onChange={(e) => {
            setChoice(e.target.value);
          }}
          placeholder="Add Todo"
        ></input>
        <input
          type="button"
          name="choices"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={handleClick}
          value="Add"
        />
      </div>

      {choices && (
        <ul>
          {choices.map((choice, i) => (
            <li>
              {choice}{" "}
              <input
                type="button"
                name="choices"
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                onClick={removeItem.bind(this, i)}
                value="x"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChoicesField;
