import{useState} from 'react'
import Form from './Form';
import Card from './Card';

function App() {

  const [artistas, setArtistas] = useState([]);

  const addArtista = (artista) => {
    setArtistas([...artistas, artista])

  }


  return (
    <div className="App">
      <h1>Artista Favorito</h1>
      <Form onAddArtistas={addArtista}/>
      <Card artistas={artistas}/>
    </div>
  );
}

export default App;
