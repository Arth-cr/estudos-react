import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['azul', 'vermelho']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label htmlFor="">
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos de uso
      </label>
      {(termos && <p>Termos aceitos</p>) || <p>é preciso aceitar os termos</p>}

      <label htmlFor="">
        <input
          type="checkbox"
          value="azul"
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
