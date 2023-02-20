import { Lucide } from "@/base-components";

const SubmitBtn = ({ submitQuestions }) => {
  return (
    <div className="xl:ml-64 xl:pl-10 mt-2 pt-2 first:mt-0 first:pt-0">
      <button
        onClick={submitQuestions}
        className="btn py-3 btn-outline-secondary border-dashed w-full"
      >
        <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
