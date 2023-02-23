const SkipableField = ({ handleChange, skipable, id }) => {
  return (
    <div className="form-check mr-4 mt-2 sm:mt-0">
      <input
        id={id}
        className="form-check-input"
        type="checkbox"
        name="skipable"
        onChange={handleChange}
        checked={skipable}
      />
      <label className="form-check-label" htmlFor={id}>
        Skipable
      </label>
    </div>
  );
};

export default SkipableField;
