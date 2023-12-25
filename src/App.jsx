import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import { DataProvider } from './context/DataContext'
import DisplayEachItem from './components/molecules/DisplayEachItem'
import Header from "./components/molecules/Header"
import CartPage from './components/pages/CartPage'
import Checkout from './components/pages/Checkout'

function App() {

  return (
    <>
    <DataProvider>
    <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='detail/:dataid' element={<DisplayEachItem/>} />
        <Route path='cart_page' element={<CartPage/>}/>
        <Route path='checkout' element={<Checkout />}/>
      </Routes>
    </DataProvider>
    </>
  )
}

export default App
