const SkipableField = ({ handleChange, skipable }) => {
  return (
    <div className="form-check mr-4 mt-2 sm:mt-0">
      <input
        id="shipping-service-custom"
        className="form-check-input"
        type="checkbox"
        name="skipable"
        onChange={handleChange}
        checked={skipable}
      />
      <label className="form-check-label" htmlFor="shipping-service-custom">
        Skipable
      </label>
    </div>
  );
};

export default SkipableField;
