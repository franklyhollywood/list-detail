import { Link } from 'react-router-dom';
import { Center, Button, Box } from '@chakra-ui/react';

export default function Character({ character }) {
  return (
    <>
      <Box borderWidth="2px" m="120" p="10">
        <Center>
          <img
            src={character.photoUrl}
            alt={character.name}
            width="500"
            height="600"
          />
        </Center>
        <Center>
          <Box m="5">name: {character.name}</Box>
          <Box m="5">position: {character.position}</Box>
          <Box m="5">allies: {character.allies}</Box>

          <p>
            <Link to="/">
              <Button size="sm" colorScheme="blue">
                BACK
              </Button>
            </Link>
          </p>
        </Center>
      </Box>
    </>
  );
}
