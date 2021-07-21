import React from 'react';
import Produto from './Produto';

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(true);

  console.log('Executou Fora');

  React.useEffect(() => {
    console.log('executou');
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco * contar}</p>
        </div>
      )}

      <button onClick={() => setContar(contar + 1)}>{contar}</button>

      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Desativar' : 'Ativar'}
      </button>
      {ativo && <Produto />}
    </>
  );
};

export default App;
