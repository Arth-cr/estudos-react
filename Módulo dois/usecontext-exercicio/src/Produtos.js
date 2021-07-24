import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produtos = () => {
  const global = React.useContext(GlobalContext);
  const { limparDados } = React.useContext(GlobalContext);
  if (global.produtos === null) return null;
  return (
    <div>
      <ul>
        {global.produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default Produtos;
