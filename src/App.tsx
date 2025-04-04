import './App.css'
import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import Footer from './components/common/Footer';
import AboutView from './views/About';
import ProductView from './views/Products';
import BlogView from './views/Blogs';
import ContactView from './views/Contact';
import BlogList from './views/BlogList';
import BrochureView from './views/Brochure';

function App() {


  return (
    <>
      <Topstrip />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/products' element={<ProductView />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/brochure' element={<BrochureView />} />

        <Route path="/blog/:slug" element={<BlogView />} />
        <Route path='/contact' element={<ContactView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
