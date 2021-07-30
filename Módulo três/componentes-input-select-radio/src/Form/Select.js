import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

export default Select;
