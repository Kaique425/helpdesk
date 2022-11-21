import { SideBar } from "../../components/Sidebar"
import { ListedTasks } from "../../components/ListedTasks"
import { NavigationBar } from "../../components/NavigationBar" 

export const Home = () => {

    return (
        <div className="App" >
        <NavigationBar/>
        <div className="Main-Container">
            <SideBar/>
            <ListedTasks/>
        </div>
        </div>
    )
}