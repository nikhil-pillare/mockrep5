import logo from './logo.svg';
import './App.css'
import Nav from "../src/components/Nav"

import { MainRoutes } from './pages/MainRoutes';
function App() {
  return (
    <div className="App">
    <Nav/>
      <MainRoutes/>
    </div>
  );
}

export default App;
