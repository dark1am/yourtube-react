import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ejercicio from './components/Ejercicio';


function App() {
  return (
    <div className="App">
      <Router >
        <Nav />

        <Switch> 

          {/* RUTA RAIZ */}

          <Route path="/home">
            <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
            </div>
          </Route>

          {/* RUTA DE BUSQUEDA */}
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/ejercicio">
            <Ejercicio />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
