import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../services/avatarAPI.js';
import Character from '../../components/Characters/Character.jsx';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadNewCharacter = async () => {
      const returnedCharacter = await getCharacter(id);
      setCharacter(returnedCharacter);
      setLoading(false);
    };
    loadNewCharacter();
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <h1>loading character...</h1>
        ) : (
          <Character character={character} />
        )}
      </div>
    </>
  );
}
