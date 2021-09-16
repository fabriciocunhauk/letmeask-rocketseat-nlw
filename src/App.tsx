import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home ";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AuthContextProvider } from './contexts/AutContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
