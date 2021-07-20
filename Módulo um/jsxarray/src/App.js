import React from 'react';

const App = () => {
  const filmes = [
    { nome: 'SW1', ano: 1984 },
    { nome: 'SW2', ano: 1986 },
    { nome: 'SW3', ano: 1988 },
    { nome: 'SW4', ano: 2000 },
    { nome: 'SW5', ano: 2001 },
    { nome: 'SW6', ano: 2002 },
  ];
  return (
    <ul>
      {filmes
        .filter(({ ano }) => ano >= 1999)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
