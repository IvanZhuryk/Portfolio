import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Modal from './components/Modal/Modal.tsx';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/home.tsx';
import About from './pages/About/about.tsx';
import Transition from './components/Transition/transition.tsx';
import Portfolio from './pages/Portfolio/Portfolio.tsx';
import Contact from './pages/Contact/Contact.tsx';
function App() {
  const [isOpen, setIsOpen] = useState(false);;
  return (
    <div className="bg-bgBlack text-white flex flex-col min-h-[100vh] releative ">
      
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}></Modal>
      <Transition></Transition>
      <Header setOpen={setIsOpen}></Header>
      <div className=' flex-1'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
