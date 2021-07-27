import React from 'react';
import './App.css';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>

        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>

        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">CEP</label>

        <input type="text" id="cep" value={form.cep} onChange={handleChange} />

        <label htmlFor="rua">Rua</label>

        <input type="text" id="rua" value={form.rua} onChange={handleChange} />

        <label htmlFor="numero">Numero</label>

        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">bairro</label>

        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>

        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>

        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />

        {response && response.ok && (
          <p style={{ color: 'blue' }}>Formulário Enviado</p>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
