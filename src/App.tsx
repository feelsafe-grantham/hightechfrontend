import './App.css'
import { useEffect } from 'react';
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
import ScrollToTop from './components/common/ScrollToTop';
import WhatsappIcon from './components/common/Icons/WhatspappIcon';
import ChatBot from './components/common/Icons/ChatBot';
import { useSnackbar } from './Operations/Alert';
import Alerts from './components/common/Alert';

import { AlertProps } from './types/contentTypes';
function App() {
  const { showSnackbar } = useSnackbar();
  const alert: AlertProps[] = [{
    type: "rating",
    name: "Alice",
    emoji: "❤️",
    segment: "Customer",
    message: "⭐ Great product, highly recommended! ⭐"
  },
  {
    type: "like",
    name: "Bob",
    emoji: "🔥",
    segment: "Follower",
    message: "❤️ I liked your recent post. Keep it up! ❤️"
  },
  {
    type: "testimonial",
    name: "Charlie",
    segment: "Client",
    message: "Had an amazing experience with your service! ⭐⭐⭐"
  },
  {
    type: "subscribed",
    name: "Dana",
    emoji: "👍",
    segment: "Subscriber",
    message: "Thanks for subscribing to our newsletter! 📧"
  },
  {
    type: "comment",
    name: "Eve",
    segment: "Viewer",
    message: "Great content, looking forward to more! 👍"
  }
  ]
  const renderSomething = () => {
    // review
    showSnackbar(<Alerts alert={alert[Math.floor(Math.random() * alert.length)]} />, "success");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      renderSomething();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Topstrip />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/brochure' element={<BrochureView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/brochure/:slug' element={<ProductView />} />
        <Route path="/blog/:slug" element={<BlogView />} />
      </Routes>
      <WhatsappIcon />
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App;
