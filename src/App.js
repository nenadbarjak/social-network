import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import User from './components/User';
import UsersList from './components/UsersList';
import users from './data/data.json';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <UsersList 
              users={users} 
              title='Select a user'
              cardIsLink={true}
            />
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
