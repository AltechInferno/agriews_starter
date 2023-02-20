import { useState } from "react";
import { Lucide } from "@/base-components";

const Question = ({ question, updateQuestion }) => {
  const {
    canSkipNextQuestion,
    skipable,
    questionPosition,
    type,
    name,
    title,
    description,
    choices,
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
              <div className="form-inline mt-5 first:mt-0">
                <label className="form-label sm:w-20">Name</label>
                <div className="flex items-center flex-1 xl:pr-20">
                  <div className="input-group flex-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="question 1"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-inline mt-5 first:mt-0">
                <label className="form-label sm:w-20">Title</label>
                <div className="flex items-center flex-1 xl:pr-20">
                  <div className="input-group flex-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-inline mt-5 first:mt-0">
                <label className="form-label sm:w-20">Description</label>
                <div className="flex items-center flex-1 xl:pr-20">
                  <div className="input-group flex-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Color"
                      name="description"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-inline mt-5 first:mt-0">
                <label clTookassName="form-label sm:w-20">Type</label>
                <div className="flex items-center flex-1 xl:pr-20">
                  <div className="input-group flex-1">
                    <div className="w-full mt-3 xl:mt-0 flex-1">
                      <select
                        id="tyoe"
                        name="type"
                        value={type}
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option key={1} value="Text">
                          Text
                        </option>
                        <option key={2} value="Number">
                          Number
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

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
                    <div className="form-check mr-4">
                      <input
                        id="shipping-service-standard"
                        className="form-check-input"
                        type="checkbox"
                        // name="horizontal_radio_button"
                        value={canSkipNextQuestion}
                        name="canSkipNextQuestion"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="shipping-service-standard"
                      >
                        CanSkipNextQues
                      </label>
                    </div>
                    <div className="form-check mr-4 mt-2 sm:mt-0">
                      <input
                        id="shipping-service-custom"
                        className="form-check-input"
                        type="checkbox"
                        // name="horizontal_radio_button"
                        name="skipable"
                        value={skipable}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="shipping-service-custom"
                      >
                        Skipable
                      </label>
                    </div>
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
