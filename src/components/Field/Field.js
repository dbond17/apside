import React from "react";
import "./Field.scss";

const Field = React.memo((props) => {
  const { label, placeholder, search, value, onChange } = props;

  return (
    <label className='field'>
      {!label ? null : <span className="field__label">{label}</span>}
      {!search ? null : (
        <button className="field__loupe">
          <img src="assets/images/loupe2.svg" alt="" />
        </button>
      )}
      {
        <span className="field__input">
          <input
            type="text"
            placeholder={placeholder ? placeholder : ""}
            value={value ? value : ""}
            onChange={onChange}
          />
        </span>
      }
    </label>
  );
});

export default Field;
