import { Lucide } from "@/base-components";

const AddQuestionnaire = ({ addQuestionnaire }) => {
  return (
    <div>
      <button
        style={{
          fontSize: 16,
        }}
        onClick={addQuestionnaire}
        className="btn py-3 btn-outline-secondary border-dashed w-full"
      >
        Add Questionnaire
      </button>
    </div>
  );
};

export default AddQuestionnaire;
