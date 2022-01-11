import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8',
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: '5cf5679a915ecad153ab68c8',
          allies: 'Royal Earthbender Guards',
          enemies: 'Chin',
          photoUrl:
            'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        })
      );
    }
  )
);

describe('should render character detail', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('testing character detail', async () => {
    render(
      <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab68c8']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('loading character...');

    await screen.findByText('allies: Royal Earthbender Guards');
  });
});
