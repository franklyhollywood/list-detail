import { Link } from 'react-router-dom';
// import styles from '../../App.css';
import {
  Flex,
  Center,
  Grid,
  SimpleGrid,
  Box,
  Button,
  GridItem,
  Stack,
  Image,
} from '@chakra-ui/react';
import CharacterChakra from './CharacterChakra.jsx';
export default function Characters({ characters }) {
  return (
    <Box bg="lightblue">
      <Flex direction="row" wrap="wrap" p="5" margin="10px" padding="10px">
        {characters.map((character) => (
          <CharacterChakra character={character} key={character._id} />
        ))}
      </Flex>
    </Box>
  );
}
//
