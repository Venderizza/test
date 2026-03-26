import { HashRouter, Routes, Route, Link } from "react-router-dom"

import About from "./About"
import './App.css'

function Home() {
  return <h1>Home page</h1>
}

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App