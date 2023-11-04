
import HomePage from "./Component/HomePage";
import MyCartPage from "./Component/MyCartPage";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import './Style/global.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/MyCartPage" element={<MyCartPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;