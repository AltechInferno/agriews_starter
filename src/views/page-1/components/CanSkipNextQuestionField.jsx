const CanSkipNextQuestion = ({ handleChange, canSkipNextQuestion, id }) => {
  return (
    <div className="form-check mr-4">
      <input
        id={id}
        className="form-check-input"
        type="checkbox"
        name="canSkipNextQuestion"
        onChange={handleChange}
        checked={canSkipNextQuestion}
      />
      <label className="form-check-label" htmlFor={id}>
        CanSkipNextQues
      </label>
    </div>
  );
};

export default CanSkipNextQuestion;
