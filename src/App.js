import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import Home from './Components/Home';
import Favourite from './Components/Favourite';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddStudent/>} />
          <Route path="/fourite" element={<Favourite/>} />
          <Route path="/edit/:id" element={<EditStudent/>} />
        </Routes>
    </div>
  );
}

export default App;
