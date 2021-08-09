import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
