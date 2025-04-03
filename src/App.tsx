import './App.css'
import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import Footer from './components/common/Footer';
import AboutView from './views/About';
function App() {


  return (
    <>
      <Topstrip />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
        <Route path='/about' element={<AboutView />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
