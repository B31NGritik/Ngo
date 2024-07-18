import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Hme from './Components1/Hme'
import Ngo from  './components2ngo/Ngo'
function App() {
  return (

    <>
    <Header/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="C:\Users\ritik\OneDrive\Desktop\Hyperlocal_foodie\my-react-app\src\Components1\Hme.jsx" element={<Hme/>} />
          <Route path="./components2ngo/Ngo" element={<Ngo/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  
    {/* <Hme/>
    <Ngo/>  */}
    </>
  )
  
}
export default App