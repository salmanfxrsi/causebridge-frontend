const Collapse = () => {
  return (
    <div>
      {/* Collapse One */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* Collapse Two */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* Collapse Three */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* Collapse Four */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
