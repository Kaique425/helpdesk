import { SideBar } from "../../components/Sidebar"
import { NavigationBar } from "../../components/NavigationBar" 
import { AdminPainel } from "../../components/Admin"
export const Admin = () => {

    return (
        <div className="App" >
        <NavigationBar/>
        <div className="Main-Container">
            <SideBar/>
            <AdminPainel/>
        </div>
        </div>
    )
}