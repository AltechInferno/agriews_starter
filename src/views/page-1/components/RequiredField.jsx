const RequiredField = ({ handleChange, required, id }) => {
  return (
    <div
      style={{ paddingTop: "2rem", fontWeight: "bold" }}
      className="form-check mr-4"
    >
      <input
        id={id}
        className="form-check-input"
        type="checkbox"
        name="required"
        onChange={handleChange}
        checked={required}
      />
      <label className="form-check-label" htmlFor={id}>
        Required
      </label>
    </div>
  );
};

export default RequiredField;
