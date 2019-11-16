import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ChatAnim from '../containers/ChatAnim'
import Chat from '../containers/Chat'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/chat" />
          <Route path="/chat" component={Chat} />
          <Route path="/chatanim" component={ChatAnim} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
