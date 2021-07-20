import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      <div>
        {produtos.map(({ nome, propriedades }) => (
          <ul style={{ border: '1px solid' }}>
            <h2>{nome}</h2>

            {propriedades.map((gb) => (
              <li key={nome}>{gb}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Produtos;
