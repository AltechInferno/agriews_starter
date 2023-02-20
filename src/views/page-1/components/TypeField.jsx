const TypeField = ({ type, handleChange }) => {
  return (
    <div className="form-inline mt-5 first:mt-0">
      <label className="form-label sm:w-20">Type</label>
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
              <option key={1} value="text">
                text
              </option>
              <option key={2} value="number">
                number
              </option>
              <option key={3} value="image">
                image
              </option>
              <option key={4} value="note">
                note
              </option>
              <option key={5} value="radiogroup">
                radiogroup
              </option>
              <option key={6} value="location">
                location
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeField;
