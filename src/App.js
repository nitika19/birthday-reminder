import logo from './logo.svg';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import List from './List.js';

function App() {
  const [people,setPeople] = useState(data);
  return (
      <main>
        <section className="container">
            <h3>{people.length} Birthday Today</h3>
            <List people={people}/>
            <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
  );
}

export default App;
