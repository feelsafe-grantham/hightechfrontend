import './App.css'
import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import Footer from './components/common/Footer';
import AboutView from './views/About';
import ProductView from './views/Products';
import BlogView from './views/Blogs';
function App() {


  return (
    <>
      <Topstrip />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/products' element={<ProductView />} />
        <Route path='/blogs' element={<BlogView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
