import "./style.css"

export const SideBar = () => {


    return (
        <div ref={SideBar} className="SideBar-container">
            <h1>Ocorrencias:</h1>
           <div className="container-tasks-options">
            <div className="tasks-options" >Inicio</div>
            <div className="tasks-options" >Abrir Chamado.</div>
            <div className="tasks-options" >Consultar</div>
           </div>
        </div>
    )
}