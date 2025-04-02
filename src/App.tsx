import './App.css'
import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
      <Topstrip />
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
