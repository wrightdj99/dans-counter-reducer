import './App.css';
import { Routes, Route } from 'react-router-dom';
import Counter from './prod-pages/Counter';
function App() {
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <hr/>
      <Routes>
          <Route path='/' element={<Counter initialCount={0}/>}/>
      </Routes>
    </div>
  );
}

export default App;
