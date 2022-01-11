import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './views/Characters/CharacterDetail';
import CharacterList from './views/Characters/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route path="/character/:id">
        <CharacterDetail />
      </Route>
      <Route path="/">
        <CharacterList />
      </Route>
    </Switch>
  );
}
