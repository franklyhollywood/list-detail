import { Box, Badge, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CharacterChakra({ character }) {
  return (
    <Box
      maxW="sm"
      minW="sm"
      borderWidth="10px"
      borderRadius="lg"
      overflow="hidden"
      fit="cover"
    >
      <Image
        minW="sm"
        align="top center"
        src={character.photoUrl}
        alt={character.name}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Allies: {character.allies}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Enemies: {character.enemies}
          </Box>
        </Box>
        <Button size="xs" margin="2" colorScheme="blue">
          <Link to={`/character/${character._id}`}>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Details: {character.name}
            </Box>
          </Link>
        </Button>
        <Box>
          {character.affiliation}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
}
