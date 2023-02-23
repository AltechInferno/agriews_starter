const QuestionnaireTitleField = ({
  handleTitleChange,
  name,
  placeholder,
  label,
  position,
  setQuestionnaires,
}) => {
  const handleChange = (e) => {
    console.log(position);
    handleTitleChange(position, e);
  };
  return (
    <div className="form-inline mt-5 first:mt-0">
      <label className="form-label sm:w-20">{label}</label>
      <div className="flex items-center flex-1 xl:pr-20">
        <div className="input-group flex-1">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireTitleField;
