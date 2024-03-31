import { Route, Routes, useNavigate } from 'react-router-dom'
import './index.css'
import LandingPage from './pages'
import Feature from './pages/Feature/Feature'
import Review from './pages/Review/Review'
import Service from './pages/Service/Service'
import Location from './pages/Location/Location'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/location' element={<Location/>}/>
    </Routes>
    </>
  )
}

export default App
