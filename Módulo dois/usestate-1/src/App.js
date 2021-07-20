import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Arthur', idade: '30' });
  const [modal, setModal] = React.useState(false);
  let [items, setItems] = React.useState(true);

  const [contar, setContar] = React.useState(1);
  const [produtos, setProdutos] = React.useState(['Produto 1']);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Cursando' });
    setItems((toggle) => !toggle);
  }

  function handleCount() {
    setContar((contar) => {
      return contar + 1;
    });
    setProdutos((produtos) => [...produtos, 'Produtos ' + (contar + 1)]);
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>

      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>

      <p>{items ? 'Teste' : 'aoisjeioajse'}</p>
      <ul>
        {produtos.map((produto) => (
          <li key={produto}>{produto}</li>
        ))}
      </ul>
      <button onClick={handleCount}>{contar}</button>
    </>
  );
};

export default App;
