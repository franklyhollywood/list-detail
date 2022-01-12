import { Link } from 'react-router-dom';
import { Center, Button } from '@chakra-ui/react';

export default function Character({ character }) {
  return (
    <>
      <Center>
        <img
          src={character.photoUrl}
          alt={character.name}
          width="500"
          height="600"
        />
      </Center>
      <Center>
        <div>name: {character.name} </div>
        <div>position: {character.position}</div>
        <div>allies: {character.allies}</div>
        <p>
          <Link to="/">
            <Button>BACK</Button>
          </Link>
        </p>
      </Center>
    </>
  );
}
