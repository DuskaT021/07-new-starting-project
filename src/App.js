import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'

function App() {
  return(
  <Layout>
    
    {/* {https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25601666#:~:text=465.%20Outputting%20Lists%20of%20Data } */}
    <Switch>
      <Route path='/' exact={true}>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
