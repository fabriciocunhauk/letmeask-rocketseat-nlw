import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home ";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from './contexts/AutContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContextProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
