import React, {useEffect, useState} from 'react'

function Api() {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const [equipos, setEquipos] = useState([])

    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch (url);
        const users = await data.json()
        setEquipos(users)
    }

    return (
        <div>
            <ul>
                {equipos.map(item => (
                    <li key={item.id}> {item.name} - {item.email} </li>
                )) 
                }
            </ul>
        </div>
    )
}

export default Api

