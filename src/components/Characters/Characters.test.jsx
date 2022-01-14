import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Characters from './Characters.jsx';

it('renders the characters view', () => {
  const characters = [
    {
      _id: '5cf5679a915ecad153ab68c8',
      allies: 'Royal Earthbender Guards',
      enemies: 'Chin',
      photoUrl:
        'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
    },
  ];

  const { container } = render(
    <MemoryRouter>
      <Characters characters={characters} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
