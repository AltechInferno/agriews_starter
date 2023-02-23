const SubmitBtn = ({ handleSubmit }) => {
  return (
    <div>
      <button
        style={{
          fontSize: 16,
        }}
        onClick={handleSubmit}
        className="btn py-3 btn-outline-secondary border-dashed w-full"
      >
        Submit Questionnaire
      </button>
    </div>
  );
};

export default SubmitBtn;
