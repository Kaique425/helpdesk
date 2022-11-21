import "./style.css"
import { Link } from "react-router-dom"


export const Login = () => {


    return (

        <div className="container" >
            <div className="login-container-inputs">
            <label htmlFor="login-input">Login</label>
            <input className="login-input" type="text" id="login-input" />
            <label htmlFor="password-input">Senha</label>
            <input className="user-password-input" type="password" id="password-input" />
            <Link to="/Home" ><button>Teste</button></Link>
            </div>
        </div>
    ) 
}