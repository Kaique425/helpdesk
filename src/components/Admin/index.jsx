import './style.css'


export const AdminPainel = () => {

    return (
        <div className="admin-painel-container" >
            <h1>Cadastrar Novo Usuário</h1>
            <form className="form-container" action="">
                <div className="inputs-container-div">
                    <div className="input-div">
                        <label htmlFor="">Login:</label>
                        <input type="text" />
                    </div>
                    <div className="input-div" >
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                    </div>
                    <div className="input-div" >
                        <label htmlFor="">E-mail:</label>
                        <input type="text" />
                    </div>
                    <div className="input-div" >
                        <label htmlFor="">Senha:</label>
                        <input type="password" />
                    </div>
                    <div className="input-div" >
                        <label htmlFor="">Ramal:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="inputs-container-div">
                    <div className="input-div" >
                        <label htmlFor="">Nível:</label>
                        <select>
                            <option value="">Nível</option>
                        </select>
                    </div>
                    <div className="input-div" >
                        <label htmlFor="">Área prímaria:</label>
                        <select>
                            <option value="">Área de trabalho</option>
                        </select>
                    </div>
                   <div>
                    <div className="input-div" >
                            <label htmlFor="">Administrador da área:</label>
                            <input type="checkbox" />
                        </div>
                        <div className="input-div" >
                            <label htmlFor="">Default:</label>
                            <input type="checkbox" />
                        </div>
                        <div className="input-div" >
                            <label htmlFor="">TECNOLOGIA DA INFORMAÇÂO:</label>
                            <input type="checkbox" />
                        </div>
                        <div className="input-div" >
                            <label htmlFor="">MANUTENÇÃO:</label>
                            <input type="checkbox" />
                        </div>
                        <div className="input-div" >
                            <label htmlFor="">MARKETING:</label>
                            <input type="checkbox" />
                        </div>
                   </div>
                        
                </div>
            </form>
        </div>
    )
}