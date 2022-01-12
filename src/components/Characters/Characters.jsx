import { Link } from 'react-router-dom';
import styles from '../../App.css';
import { Flex, Center, Grid, SimpleGrid, Box } from '@chakra-ui/react';
export default function Characters({ characters }) {
  return (
    <ul className={styles.ul}>
      {characters.map((character) => (
        <li className={styles.li} key={character._id}>
          <Link to={`/character/${character._id}`}>
            <img src={character.photoUrl} alt={character.name} width="200" />
            <div>name: {character.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
