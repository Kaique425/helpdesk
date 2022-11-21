import './App.css';
import { useEffect } from "react"
import { SideBar } from "./components/Sidebar"
import { NavigationBar } from "./components/NavigationBar"
import { ListedTasks } from "./components/ListedTasks"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Templates/Home"
import { Login } from "./Templates/Login" 
import { Admin } from "./Templates/Admin"
function App() {


  useEffect(() => {
  }, [])


  return (
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path="" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
