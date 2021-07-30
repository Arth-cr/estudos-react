import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((e) => (
        <label key={e}>
          <input
            type="radio"
            value={e}
            checked={value === e}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {e}
        </label>
      ))}
    </>
  );
};

export default Radio;
