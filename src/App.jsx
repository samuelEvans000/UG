
import './App.css'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'

function App() {

  return (
    <div className='app'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App