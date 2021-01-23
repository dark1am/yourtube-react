import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />

        <Switch> 

          {/* RUTA RAIZ */}
          <Route path="/">
            <div className="content">
            <Sidebar />
            <RecommendedVideos />
            </div>
          </Route>

          {/* RUTA DE BUSQUEDA */}
          <Route path="/search">
            <h2>Ruta de busqueda</h2>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
