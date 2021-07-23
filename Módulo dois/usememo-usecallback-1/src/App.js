import React from 'react';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 10000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const Produto = () => {
  const [prod1, setProd1] = React.useState(0);
  const [prod2, setProd2] = React.useState(0);

  function func1() {
    setProd1(prod1 + 1);
  }

  const func2 = React.useCallback(() => setProd2((e) => e + 1), []);

  return (
    <>
      <button onClick={func1}>Produto {prod1}</button>
      <button onClick={func2}>Produto {prod2}</button>
    </>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem('preferido');
  //   return localItem;
  // });

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1);

  // function handleClick() {
  //   setContar((e) => e + 1);
  // }

  const handleClick = React.useCallback(() => setContar((e) => e + 1), []);

  return (
    <div>
      <Produto />

      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
