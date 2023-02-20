const NameField = ({ handleChange, name }) => {
  return (
    <div className="form-inline mt-5 first:mt-0">
      <label className="form-label sm:w-20">Name</label>
      <div className="flex items-center flex-1 xl:pr-20">
        <div className="input-group flex-1">
          <input
            type="text"
            className="form-control"
            placeholder="question 1"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NameField;
