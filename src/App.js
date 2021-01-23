import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Sidebar />
        <RecommendedVideos />
      </div>
      
    </div>
  );
}

export default App;
