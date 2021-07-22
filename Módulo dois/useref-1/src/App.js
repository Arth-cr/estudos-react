import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('Comentario');
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOutRef = React.useRef();
  const inputElement = React.useRef();

  function addtocart() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <>
      <div>
        <p>Itens no carrinho {carrinho}</p>
        <button onClick={addtocart}>Adionar ao Carrinho</button>
        <p>{notificacao}</p>
      </div>

      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
};

export default App;
