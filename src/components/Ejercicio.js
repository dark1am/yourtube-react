import React, {useState} from 'react';



function Ejercicio() {
    const [aumentar, setAumentar] = useState(0);

    const incrementar = () => {
        setAumentar(aumentar + 1);
    }

    return (
        <div className="ejercicio">
            <button onClick={incrementar}>Aumentar</button>
            <p> {aumentar} </p>
        </div>
    )
}

export default Ejercicio
