import { useState } from 'react'

function App() {
 
  const [myValue , setMyValue] = useState('');
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e) => {
    setMyValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Hello world</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={myValue} onChange={handleInputChange} />
          <button>Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
