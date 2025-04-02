import './App.css'
import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
function App() {


  return (
    <>
      <Topstrip />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </>
  )
}

export default App
