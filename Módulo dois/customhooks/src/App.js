import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';
const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, erro } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <h1 style={{ color: 'red' }}>Error 404: link not found</h1>;
  if (data)
    return (
      <div>
        <h1>Produto favorito: {produto}</h1>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        <ul>
          {data.map((produto) => (
            <li key={produto.id}>
              <button onClick={handleClick}>{produto.nome}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default App;
