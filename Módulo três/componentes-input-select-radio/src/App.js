import React from 'react';
import './App.css';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Azul');
  const [frutas, setFrutas] = React.useState('');
  return (
    <form>
      <h2>Selecione sua cor</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Selecione sua fruta</h2>
      <Radio options={['banana', 'uva']} value={frutas} setValue={setFrutas} />

      <Select
        options={['smartphone', 'notebook', 'tablet']}
        value={produto}
        setValue={setProduto}
      />

      <Input label="Nome" id="nome" value={nome} setValue={setNome} required />

      <Input
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
