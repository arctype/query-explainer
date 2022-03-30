import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'
import Home from './components/Home'
import QueryExplainer from './components/QueryExplainer'
import QueryWriter from './components/QueryWriter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
      <Navigation/>
        <Routes>
          <Route path= "/" exact element={<Home/>} />
          <Route path= "/query-writer" exact element={<QueryWriter/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
