import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import User from './components/User';
import UsersList from './components/UsersList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <UsersList />
          </Route>
          <Route path='/user/:id'>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
