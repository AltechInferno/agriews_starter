const NameField = ({ handleChange, title }) => {
  return (
    <div className="form-inline mt-5 first:mt-0">
      <label className="form-label sm:w-20">Title</label>
      <div className="flex items-center flex-1 xl:pr-20">
        <div className="input-group flex-1">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NameField;
