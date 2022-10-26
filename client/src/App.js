import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import AllHeroes from './components/AllHeroes';
import AddHero from "./components/AddHero";
import EditHero from "./components/EditHero";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllHeroes/>} />
        <Route path="/hero/add_hero" element={<AddHero/>}/>
        <Route path="/hero/edit/:id" element={<EditHero/>}/>
      </Routes>
    </div>
  );
}

export default App;