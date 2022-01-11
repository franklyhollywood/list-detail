import { getCharacters } from '../../services/avatarAPI.js';
import { useState, useEffect } from 'react';
import Characters from '../../components/Characters/Characters.jsx';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllCharacters = async () => {
      const returnedCharacters = await getCharacters();
      setCharacters(returnedCharacters);
      setLoading(false);
    };
    loadAllCharacters();
  }, []);

  return (
    <>
      {loading ? <h2>Loading...</h2> : <Characters characters={characters} />}
    </>
  );
}
