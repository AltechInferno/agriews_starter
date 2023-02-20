import { useState } from "react";
import { Lucide } from "@/base-components";

import {
  NameField,
  TitleField,
  DescriptionField,
  TypeField,
  CanSkipNextQuestionField,
  SkipableField,
  ChoicesField,
  SkipOnField,
} from "./";

const Question = ({ question, updateChoices, updateQuestion }) => {
  const {
    canSkipNextQuestion,
    skipable,
    questionPosition,
    type,
    name,
    title,
    description,
    choices,
    skipOn,
  } = question;

  const handleChange = (event) => {
    updateQuestion(questionPosition - 1, event);
  };

  return (
    <>
      <div className="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
        <div className="form-label xl:w-64 xl:!mr-10">
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Question {questionPosition}</div>
            </div>
            <div className="leading-relaxed text-slate-500 text-xs mt-3">
              Question note
            </div>
          </div>
        </div>
        <div className="w-full mt-3 xl:mt-0 flex-1">
          <div className="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
            <a
              href=""
              className="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
            >
              <Lucide icon="X" className="w-5 h-5" />
            </a>
            <div>
              <NameField name={name} handleChange={handleChange} />
              <TitleField title={title} handleChange={handleChange} />
              <DescriptionField
                description={description}
                handleChange={handleChange}
              />
              <TypeField type={type} handleChange={handleChange} />
              {type === "radiogroup" && (
                <ChoicesField
                  choices={choices}
                  questionPosition={questionPosition}
                  canSkipNextQuestion={canSkipNextQuestion}
                  updateChoices={updateChoices}
                />
              )}
              {canSkipNextQuestion && choices && (
                <SkipOnField
                  skipOn={skipOn}
                  choices={choices}
                  handleChange={handleChange}
                />
              )}
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div className="form-label xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Skip Logic</div>
                    </div>
                    <div className="leading-relaxed text-slate-500 text-xs mt-3">
                      instructions
                    </div>
                  </div>
                </div>

                <div className="w-full mt-3 xl:mt-0 flex-1">
                  <div className="flex flex-col sm:flex-row">
                    <CanSkipNextQuestionField
                      handleChange={handleChange}
                      canSkipNextQuestion={canSkipNextQuestion}
                    />
                    <SkipableField
                      handleChange={handleChange}
                      skipable={skipable}
                    />
                  </div>
                  <div className="leading-relaxed text-slate-500 text-xs mt-3">
                    Choose canSkipNextQuestion for the parent and skipable for
                    the child
                    <a className="text-primary font-medium" href="">
                      Docs
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                          <button className="btn btn-outline-primary border-dashed w-full">
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </button>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
