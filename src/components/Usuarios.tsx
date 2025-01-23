import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuario, Usuario } from "../interfaces/listaUsuarios";

export const Usuarios = () => {
    //Generar un arreglo de usuarios
    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        //Petición a la API
        reqResApi.get<ListaUsuario>('/users')
            .then(resp => {
                //console.log(resp.data.data);
                setUsers(resp.data.data)
            })
            .catch(console.log);
    }, []);

    //Función que repite las filas necesarias en la tabla para mostrar los usuarios
    const itemRowsTable = ({ first_name, last_name, email, avatar }: Usuario) => {
        //desestructuración del objeto
        //const{first_name, last_name, email}=usuario;
        return (
            <tr>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 30,
                            borderRadius: 7
                        }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Lista Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemRowsTable(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
