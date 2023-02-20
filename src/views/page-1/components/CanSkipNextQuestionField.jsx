const CanSkipNextQuestion = ({ handleChange, canSkipNextQuestion }) => {
  return (
    <div className="form-check mr-4">
      <input
        id="shipping-service-standard"
        className="form-check-input"
        type="checkbox"
        name="canSkipNextQuestion"
        onChange={handleChange}
        checked={canSkipNextQuestion}
      />
      <label className="form-check-label" htmlFor="shipping-service-standard">
        CanSkipNextQues
      </label>
    </div>
  );
};

export default CanSkipNextQuestion;
