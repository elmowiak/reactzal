import { useState } from 'react'
import './App.css'
import ferrari from './assets/ferrari.png';
import mclaren from './assets/mclaren.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.ferrari.com/en-PL" target="_blank">
          <img src={ferrari} className="logo" alt="Vite logo" />
        <a href="https://cars.mclaren.com/en?_ga=2.40219104.393044615.1686435747-1846481062.1686435747">  
          <img src={mclaren} className="logo react" alt="React logo" />
        </a></a>
       
      </div>
      <h1>Łukasz Jagieła 115 236 Grupa 2 Zaoczna Łódź</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Ile razy potrafisz klikać bez celu? Sprawdź! {count}
        </button>
        <p>
          "Marzenia są po to aby je spełniać, więc trzeba zostać programistą aby mieć pesos na takie autka"
        </p>
      </div>
      <p className="read-the-docs">
        Lubię motoryzacje dlatego podmieniam ikonki na samochody, a linki są do oficjalnych stron
      </p>
    </>
  )
}

export default App
