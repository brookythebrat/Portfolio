import { useState } from 'react'
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
      </div>
    </>
  );
}

export default App
