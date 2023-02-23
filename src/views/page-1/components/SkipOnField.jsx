import { useEffect, useState } from "react";

const SkipOnField = ({ choices, skipOn, handleChange }) => {
  return (
    <div className="form-inline mt-5 first:mt-0">
      <label className="form-label sm:w-20">SkipOn</label>
      <div className="flex items-center flex-1 xl:pr-20">
        <div className="input-group flex-1">
          <div className="w-full mt-3 xl:mt-0 flex-1">
            <select
              name="skipOn"
              value={skipOn}
              className="form-select"
              onChange={handleChange}
            >
              {choices.map((choice, i) => (
                <option key={i} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipOnField;
