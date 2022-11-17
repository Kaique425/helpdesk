import './App.css';
import { useEffect } from "react"
import { SideBar } from "./components/Sidebar"
import { NavigationBar } from "./components/NavigationBar"
import { ListedTasks } from "./components/ListedTasks"
function App() {


  useEffect(() => {
  }, [])


  return (

    <div className="App">
    <NavigationBar/>
    <div className="Main-Container">
      <SideBar/>
      <ListedTasks/>
    </div>
    </div>
  );
}

export default App;
