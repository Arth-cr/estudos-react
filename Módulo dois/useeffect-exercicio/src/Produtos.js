import React from 'react';

const Produtos = ({ produto }) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setProdutos(json));
  }, [produto]);

  if (produtos === null) return null;

  return (
    <div>
      <h1>{produtos.nome}</h1>
      <p>R$ {produtos.preco}</p>
    </div>
  );
};

export default Produtos;
