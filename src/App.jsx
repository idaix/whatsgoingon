import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Books, Home, Movies } from './pages'
import './App.css'

const App = () => {
  return (
    <div className='font-serif'>
      <Navbar />
      <main className="container mx-auto app-main ">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/movies' element={<Movies />} />
          {/* <Route path='/' element='Hello, World!' /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App