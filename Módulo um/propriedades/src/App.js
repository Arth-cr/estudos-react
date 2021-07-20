import React from 'react';
import Form from './Form/Form';

const Titulo = (props) => {
  return (
    <>
      <h1>{props.titulo}</h1>
      <p style={{ color: props.cor }}>{props.texto}</p>
    </>
  );
};

const TituloD = ({ children }) => {
  return <h2>{children}</h2>;
};

const App = () => {
  return (
    <div>
      <Titulo titulo="Hello World!" texto="aosejoaisjeoaisejia" cor="blue" />
      <Titulo titulo="Hello World!" texto="aosejoaisjeoaisejia" cor="tomato" />

      <TituloD>Olá Mundo!</TituloD>

      <Form />
    </div>
  );
};

export default App;
