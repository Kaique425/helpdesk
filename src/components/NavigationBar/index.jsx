import "./style.css"
import { Link } from "react-router-dom"
import { NavBarLink } from "../NavBarLink"

export const NavigationBar = () => {
    return (
        <div className="nav-container" >
            <Link to="/" ><NavBarLink linkName={"Sair"}/></Link>
            <Link to="/Home" ><NavBarLink linkName={"Home"}/></Link>
            <Link to="/Home"><NavBarLink linkName={"Chamados"}/></Link>
            <Link to="/Admin" ><NavBarLink linkName={"Admin"}/></Link>
        </div>
    )
}