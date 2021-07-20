import React from 'react';

const titulo = <h1>Título 1</h1>

const App = () => {
  const random = Math.random();
  const ativo = true;

  function nomeSobrenome(nome, sobrenome) {
    return (nome + ' ' + sobrenome);
  }

  const frutas = {
    tipo: "melancia",
    cor: "vermelha"
  }

  const styles = {
    color: 'red',
    fontWeight: "bold"
  }

  return (
    <>
    {titulo}
    <p>
      {false ? 'aisuheasue ' : 'De '} 
      {nomeSobrenome('Arthur', 'Ribeiro')}
    </p>

    <p>
      {new Date().getFullYear()}
    </p>

    <p style={styles}>{frutas.tipo}</p>
    <p style={styles}>{frutas.cor}</p>

    <p className={ativo ? 'ativo' : 'inativo'}>
      {(random * 100)}
      </p>
    </>);
};

export default App;

