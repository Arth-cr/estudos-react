import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <>
      <div>Pessoa: {global.name}</div>
      <button onClick={handleClick}>Quantidade:{global.contar}</button>
    </>
  );
};

export default Produto;
