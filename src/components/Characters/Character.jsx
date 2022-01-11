import { Link } from 'react-router-dom';

export default function Character({ character }) {
  return (
    <>
      <img
        src={character.photoUrl}
        alt={character.name}
        width="500"
        height="600"
      />
      <div>name: {character.name} </div>
      <div>position: {character.position}</div>
      <div>allies: {character.allies}</div>
      <Link to="/">Back</Link>
    </>
  );
}
