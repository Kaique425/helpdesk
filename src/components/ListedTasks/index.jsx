import "./style.css"
import { Task } from "../Task"


export const ListedTasks = () => {
    const taskList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
        <div className="Tasks-Container">
        <table>
            <thead>
                <tr>
                <th>N°/Area</th>
                <th>Problema</th>
                <th>Contato/Ramal</th>
                <th>Local/Descrição</th>
                <th>Tempo Valido</th>
                </tr>
            </thead>
            <tbody>
                {taskList.map(taskNumber => (
                    <tr key={taskNumber}>
                        <td>38550 TECNOLOGIA DA INFORMACAO</td>
                        <td> Totvs12</td>
                        <td>
                            <div>Paulo</div>
                            <div>7030</div>
                        </td>
                        <td>INTERCAMBIO
                            Seguem um novo caso dos arquivos A560 que estão com valores diferentes na geração. fatura 2200046125
                        </td>
                        <td>141 dias Aguardando atendimento</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </div>
    )
}