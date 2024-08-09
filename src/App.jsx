import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import SideBar2 from './components/sidebar/SideBar2'
// import Home from './components/Home'
import Welcom_Page from './Welcom_Page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/dashboard" element={<Home />} /> */}
            {/* <Route path="/" element={<SideBar2 />} /> */}
            <Route path="/?tab=Hero" element={<Welcom_Page />} />
            <Route path="/" element={<Welcom_Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
