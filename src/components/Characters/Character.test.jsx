import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('renders the character view', () => {
  const character = {
    _id: '5cf5679a915ecad153ab68c8',
    allies: 'Royal Earthbender Guards',
    enemies: 'Chin',
    photoUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
  };

  const { container } = render(
    <MemoryRouter>
      <Character character={character} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
