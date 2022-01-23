import Create from './Pages/Create'
import Home from './Pages/Home'
import Navigation from './Components/Navigation'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
