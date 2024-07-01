import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Write from './components/Write'
import "./index.css";

function App() {

  return (
    <>
    <h1>Halo</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Write/>}/>
          <Route path="/write" element={<Write/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
