import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ejercicio from './components/Ejercicio';
import React, {useEffect, useState}  from 'react';


function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status)
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  }
  useEffect(() => {
    fetchApi(); 
  }, [])

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
            <Ejercicio title= {!todos ?'cargando...': todos.map((todo, index) => {
              return <li> {todos.userId} </li>
            })}/>
            
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
