
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import FooterContainer from './Component/FooterContainer'

function App() {


  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20'>
        <Outlet></Outlet>
      </div>
      <FooterContainer />
    </>
  )
}

export default App
