import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Nome">Nome</label>

      <input
        type="text"
        value={nome}
        name="nome"
        id="Nome"
        onChange={(event) => setNome(event.target.value)}
      />

      <br />

      <label htmlFor="Email">E-mail</label>

      <input
        type="text"
        value={email}
        name="email"
        id="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{nome}</p>
      <p>{email}</p>
      <button>Enviar</button>
    </form>
  );
};

export default App;
