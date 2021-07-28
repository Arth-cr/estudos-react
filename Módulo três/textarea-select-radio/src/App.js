import React from 'react';
import './App.css';

const App = () => {
  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
      />
      <br />
      {textarea}
      <br />

      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione seu produto
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <br />
      {select}
      <br />

      <label htmlFor="note">
        <input
          type="radio"
          id="note"
          value="note"
          name="produto"
          checked={radio === 'note'}
          onChange={({ target }) => setRadio(target.value)}
        />
        notebook
      </label>

      <label htmlFor="tabletRadio">
        <input
          type="radio"
          id="tabletRadio"
          value="tabletRadio"
          name="produto"
          checked={radio === 'tabletRadio'}
          onChange={({ target }) => setRadio(target.value)}
        />
        tablet
      </label>

      <label htmlFor="smart">
        <input
          type="radio"
          id="smart"
          value="smart"
          name="produto"
          checked={radio === 'smart'}
          onChange={({ target }) => setRadio(target.value)}
        />
        smartphone
      </label>
      <br />
      {radio}
      <br />
    </form>
  );
};

export default App;
